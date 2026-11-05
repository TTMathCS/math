# 8. Sequences, series and induction

*What is $1 + 2 + 3 + \cdots + 1000$? What is $1 + \tfrac12 + \tfrac14 + \tfrac18 + \cdots$ if it never stops? Is a
formula that works for the first hundred cases true for all of them? This chapter is about lists of numbers that
follow a rule, the sums of such lists, and the one method that proves a statement for infinitely many whole numbers
at once: induction. You will prove the classic sum formulas, the binomial theorem, and the exact formula for the
Fibonacci numbers, and take a first careful look at what it means for an infinite sum to have a value.*

!!! abstract "In this chapter"
    **You will learn:**

    - arithmetic and geometric sequences, and proofs of their sum formulas
    - sigma notation and the rules for manipulating sums, including telescoping
    - proof by induction, strong induction, and why induction is a valid way to prove things
    - the binomial theorem and Pascal's triangle, with proofs
    - how to solve linear recurrences, including Binet's formula for the Fibonacci numbers
    - when an infinite geometric series has a sum, and the precise meaning of convergence

    **You need:** [Chapter 1](01-The-Language-of-Algebra.md) (expanding and simplifying),
    [Chapter 5](05-Quadratics.md) (the quadratic formula) and [Chapter 7](07-Exponents-and-Logarithms.md)
    (exponents). Gentler versions on the Topics shelf:
    [Arithmetic sequences](../../topics/patterns/level-5/01-arithmetic-sequences.md),
    [Gauss's trick](../../topics/patterns/level-5/03-gauss-trick.md),
    [Geometric sequences](../../topics/patterns/level-6/01-geometric-sequences.md),
    [Sigma notation](../../topics/patterns/level-7/01-sigma-notation.md),
    [Infinite geometric series](../../topics/patterns/level-7/03-infinite-geometric.md) and
    [Proof by induction](../../topics/patterns/level-8/01-proof-by-induction.md).

    **Levels:** 8.1 and 8.2 are beginner to intermediate; 8.3 and 8.4 are intermediate; 8.5 and 8.6 are advanced.

## 8.1 Arithmetic and geometric sequences

A **sequence** is a list of numbers in order: $a_1, a_2, a_3, \dots$. The numbers are its **terms**, and the small
number below, the **index**, says where each term sits. Formally a sequence is a function from the whole numbers to
the reals ([Chapter 6](06-Functions.md)), with $a_n$ written instead of $a(n)$. A sequence can be given by an
**explicit formula** ($a_n = n^2$) or by a **recurrence**, a rule that builds each term from earlier ones
($a_1 = 1$, $a_{n+1} = a_n + 2n + 1$, which gives the same squares).

**Arithmetic sequences** add the same number $d$, the **common difference**, at each step:

$$
a, \ a + d, \ a + 2d, \ a + 3d, \ \dots \qquad a_n = a + (n - 1)d .
$$

To reach the $n$th term from the first you take $n - 1$ steps, hence $n - 1$, not $n$. Example: 7, 11, 15, 19, ...
has $a = 7$, $d = 4$, and $a_{50} = 7 + 49 \times 4 = 203$.

**The sum of an arithmetic sequence.** Let $S = a_1 + a_2 + \cdots + a_n$. Write the sum forwards and backwards:

$$
\begin{aligned}
S &= a_1 + a_2 + \cdots + a_{n-1} + a_n \\
S &= a_n + a_{n-1} + \cdots + a_2 + a_1 .
\end{aligned}
$$

Add the columns. Each column is a pair $a_k + a_{n+1-k}$; going one step right raises the first by $d$ and lowers the
second by $d$, so every column has the same total, $a_1 + a_n$. There are $n$ columns, so $2S = n(a_1 + a_n)$ and

$$
S = \frac{n(a_1 + a_n)}{2} = \text{(number of terms)} \times \text{(average of first and last)} . \qquad \square
$$

**Example 1.** $1 + 2 + \cdots + 100 = \dfrac{100 \times 101}{2} = 5050$. More generally,

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2},
$$

the $n$th **triangular number**. A well-known story says that Carl Friedrich Gauss, as a schoolboy, found 5050 in
moments by this pairing. The story was first told in a biography written soon after his death, and its details
(even the numbers in the sum) vary between tellings, so treat it as a story; the trick itself is much older.

**Example 2.** The sum of the first $n$ odd numbers, $1 + 3 + 5 + \cdots + (2n - 1)$, is arithmetic with first term 1
and last term $2n - 1$, so it equals $\dfrac{n(1 + 2n - 1)}{2} = n^2$. Check: $1 + 3 + 5 + 7 = 16 = 4^2$.

**Geometric sequences** multiply by the same number $r$, the **common ratio**, at each step:

$$
a, \ ar, \ ar^2, \ ar^3, \ \dots \qquad a_n = a r^{n-1} .
$$

Example: 3, 6, 12, 24, ... has $r = 2$; 81, 27, 9, 3, ... has $r = 1/3$; 1, $-1$, 1, $-1$, ... has $r = -1$. These are
the exponential functions of [Chapter 7](07-Exponents-and-Logarithms.md), sampled at whole numbers.

**The sum of a geometric sequence.** Let $S = a + ar + ar^2 + \cdots + ar^{n-1}$ ($n$ terms). Multiply by $r$:

$$
\begin{aligned}
S &= a + ar + ar^2 + \cdots + ar^{n-1} \\
rS &= \phantom{a + {}} ar + ar^2 + \cdots + ar^{n-1} + ar^n .
\end{aligned}
$$

Subtract: almost everything cancels, leaving $S - rS = a - ar^n$. If $r \neq 1$,

$$
S = a \, \frac{1 - r^n}{1 - r} . \qquad \square
$$

(If $r = 1$ every term is $a$ and $S = na$.) The special case $a = 1$ is worth memorising as a factorisation:

$$
1 + r + r^2 + \cdots + r^{n-1} = \frac{r^n - 1}{r - 1}, \qquad\text{that is}\qquad r^n - 1 = (r - 1)(r^{n-1} + \cdots + r + 1).
$$

**Example 3.** The chessboard legend: one grain of rice on the first square, two on the second, four on the third,
doubling each time. The total on 64 squares is $1 + 2 + \cdots + 2^{63} = 2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615$,
about $1.8 \times 10^{19}$ grains, far more rice than has ever been grown.

**Example 4.** $5 + 15 + 45 + \cdots + 5 \cdot 3^9 = 5 \cdot \dfrac{3^{10} - 1}{3 - 1} = 5 \cdot \dfrac{59048}{2} = 147\,620$.

## 8.2 Sigma notation

Writing "$+ \cdots +$" is clumsy and sometimes unclear. The Greek capital sigma, $\Sigma$, for "sum", gives a precise
shorthand:

$$
\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n .
$$

Read it as "the sum of $a_k$ for $k$ from 1 to $n$". The letter $k$ is a **dummy index**: it has no meaning outside
the sum, and $\sum_{j=1}^n a_j$ is the same thing. Examples:

$$
\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = 30, \qquad \sum_{k=0}^{3} 2^k = 1 + 2 + 4 + 8 = 15, \qquad \sum_{k=1}^{5} 7 = 35 .
$$

**Rules.** Because a sum is just repeated addition, it obeys these, for constants $c$:

$$
\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k, \qquad
\sum_{k=1}^{n} c\,a_k = c \sum_{k=1}^{n} a_k, \qquad \sum_{k=1}^{n} c = nc .
$$

The first two say that $\Sigma$ is **linear**. Be careful with what is *not* a rule: $\sum a_k b_k$ is not
$\left(\sum a_k\right)\left(\sum b_k\right)$; try $n = 2$ with all terms 1: the left is 2, the right is 4.

**Shifting the index.** $\sum_{k=1}^{n} a_k = \sum_{j=0}^{n-1} a_{j+1}$ (put $j = k - 1$). Shifting is how one lines up
two sums so they can be compared or combined.

**Telescoping sums.** If each term is a difference of consecutive values of something, nearly everything cancels:

$$
\sum_{k=1}^{n} (b_{k+1} - b_k) = (b_2 - b_1) + (b_3 - b_2) + \cdots + (b_{n+1} - b_n) = b_{n+1} - b_1 .
$$

It collapses like a telescope. This simple fact is surprisingly powerful.

**Example 5.** $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)}$. Split the fraction: $\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$
(check: the right side is $\frac{(k+1) - k}{k(k+1)}$). So the sum telescopes to $1 - \dfrac{1}{n+1} = \dfrac{n}{n+1}$.
For $n = 99$: $\frac12 + \frac16 + \frac1{12} + \cdots + \frac{1}{9900} = \frac{99}{100}$.

**Example 6 (the sum of squares, discovered).** We want $S_2 = \sum_{k=1}^n k^2$. Here is a way to *find* the formula,
not just check it. Expand $(k + 1)^3 - k^3 = 3k^2 + 3k + 1$ and sum from $k = 1$ to $n$. The left side telescopes:

$$
(n+1)^3 - 1 = 3 S_2 + 3 \cdot \frac{n(n+1)}{2} + n .
$$

Solve for $S_2$:

$$
3S_2 = (n+1)^3 - 1 - n - \frac{3n(n+1)}{2} = (n+1)\left[(n+1)^2 - 1 - \frac{3n}{2}\right] = (n+1)\cdot\frac{2n^2 + n}{2},
$$

(using $(n+1)^3 - (n + 1) = (n+1)((n+1)^2 - 1)$), so

$$
\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6} .
$$

Check: $n = 10$ gives $\frac{10 \cdot 11 \cdot 21}{6} = 385$, and $1 + 4 + 9 + \cdots + 100 = 385$. The same method,
starting from $(k+1)^4 - k^4$, finds $\sum k^3$, and so on up: each power sum is a polynomial in $n$ of one higher degree.

## 8.3 Proof by induction

Here is a pattern: $1 = 1$, $1 + 8 = 9$, $1 + 8 + 27 = 36$, $1 + 8 + 27 + 64 = 100$. The sums of cubes are $1^2, 3^2, 6^2, 10^2$:
the squares of the triangular numbers. Is it always true that

$$
1^3 + 2^3 + \cdots + n^3 = \left(\frac{n(n+1)}{2}\right)^2 ?
$$

We can check a thousand cases by computer, but that proves only a thousand cases. Patterns can fail late. (A
famous example: joining $n$ points on a circle in general position cuts it into
1, 2, 4, 8, 16 regions for $n = 1, \dots, 5$, and then 31, not 32, for $n = 6$.) We need a way to prove a statement for
**every** whole number.

**The principle of mathematical induction.** Let $P(n)$ be a statement about a whole number $n$. Suppose

1. **(base case)** $P(1)$ is true, and
2. **(inductive step)** for every $n \ge 1$, if $P(n)$ is true then $P(n + 1)$ is true.

Then $P(n)$ is true for every $n \ge 1$.

Think of an infinite line of dominoes. The base case knocks over the first. The inductive step says each falling
domino knocks over the next. Then every domino falls. In the inductive step you do **not** assume what you want to
prove; you assume it for one $n$ (the **inductive hypothesis**) and show the next case follows. The base can be any
starting number $n_0$ instead of 1; the conclusion is then "for every $n \ge n_0$".

**Why is induction valid?** It rests on a basic property of the whole numbers, the **well-ordering principle**:
every non-empty set of positive integers has a smallest element. Suppose 1 and 2 hold but $P(n)$ fails for some
$n$. Then the set of failures is non-empty, so it has a smallest element $m$. $m \neq 1$ (the base case holds), so
$m - 1 \ge 1$, and $P(m - 1)$ is true because $m$ was the *smallest* failure. By the inductive step, $P(m)$ is true,
a contradiction. $\square$ (In a formal treatment of the natural numbers, such as Peano's axioms of 1889, induction is
taken as an axiom, and well-ordering is proved from it; each can be derived from the other.)

**Example 7 (sum of cubes).** $P(n)$: $\sum_{k=1}^n k^3 = \frac{n^2(n+1)^2}{4}$.

*Base:* $n = 1$: $1 = \frac{1 \cdot 4}{4}$. True.

*Step:* Assume $P(n)$. Then

$$
\sum_{k=1}^{n+1} k^3 = \frac{n^2(n+1)^2}{4} + (n+1)^3 = \frac{(n+1)^2\left(n^2 + 4(n+1)\right)}{4} = \frac{(n+1)^2(n+2)^2}{4},
$$

which is $P(n+1)$. So $P(n)$ holds for all $n \ge 1$. $\square$

The shape of every such proof is the same: write the sum up to $n + 1$ as (sum up to $n$) plus (last term), use the
hypothesis on the first part, and do algebra until the formula for $n + 1$ appears. It helps to write down the
target, $P(n+1)$, before starting.

**Example 8 (divisibility).** For every $n \ge 1$, 3 divides $4^n - 1$.

*Base:* $4 - 1 = 3$. *Step:* assume $4^n - 1 = 3m$ for a whole number $m$. Then
$4^{n+1} - 1 = 4 \cdot 4^n - 1 = 4(3m + 1) - 1 = 12m + 3 = 3(4m + 1)$. $\square$
(Check: $4^5 - 1 = 1023 = 3 \times 341$. There is also a one-line proof from 8.1: $4^n - 1 = (4 - 1)(4^{n-1} + \cdots + 1)$.)

**Example 9 (an inequality).** $2^n > n^2$ for every $n \ge 5$.

*Base:* $2^5 = 32 > 25$. *Step:* assume $2^n > n^2$ with $n \ge 5$. Then $2^{n+1} = 2 \cdot 2^n > 2n^2$, and we want
$2n^2 \ge (n+1)^2 = n^2 + 2n + 1$, that is $n^2 \ge 2n + 1$, true for $n \ge 3$ because $n^2 - 2n - 1 = (n - 1)^2 - 2 > 0$
once $n - 1 \ge 2$. So $2^{n+1} > (n+1)^2$. $\square$ (The statement is false for $n = 2, 3, 4$: $4 = 4$, $8 < 9$,
$16 = 16$. The base case matters.)

**Example 10 (Bernoulli's inequality).** For $x \ge -1$ and $n \ge 1$, $(1 + x)^n \ge 1 + nx$. This was proved in
[Chapter 7](07-Exponents-and-Logarithms.md), §7.7, by exactly this method, and used there to show the number $e$ exists.

**Strong induction.** Sometimes $P(n + 1)$ needs not just $P(n)$ but earlier cases too. **Strong induction** lets you
assume $P(1), P(2), \dots, P(n)$ all hold when proving $P(n + 1)$. It is no stronger logically: apply ordinary
induction to the statement "$P(1)$ and ... and $P(n)$".

**Example 11 (prime factors).** Every whole number $n \ge 2$ is a product of primes. (A **prime** is a whole number
$\ge 2$ whose only positive divisors are 1 and itself; a single prime counts as a product of one prime.)

*Proof by strong induction.* $n = 2$ is prime. Suppose every number from 2 to $n$ is a product of primes, and
consider $n + 1$. If it is prime, done. If not, $n + 1 = ab$ with $2 \le a, b \le n$. By the hypothesis, $a$ and $b$
are both products of primes, so $ab$ is too. $\square$

Ordinary induction would be stuck here: knowing about $n$ says nothing useful about $n + 1$, but knowing about all
smaller numbers does. (That the factorisation is *unique* is a separate and deeper theorem, proved in Chapter 18.)

**Example 12 (stamps).** With 3-cent and 5-cent stamps, you can make every postage of 8 cents or more. *Base cases:*
$8 = 3 + 5$, $9 = 3 + 3 + 3$, $10 = 5 + 5$. *Step:* for $n \ge 10$, assume all amounts from 8 to $n$ are possible; then
$n + 1 = (n - 2) + 3$, and $n - 2 \ge 8$ is possible, so add a 3-cent stamp. $\square$

**A false proof, to sharpen the eye.** "All horses are the same colour." *Proof:* $P(n)$ is "any $n$ horses are the
same colour". $P(1)$ is clear. Assume $P(n)$; given $n + 1$ horses, the first $n$ are the same colour, and the last
$n$ are the same colour; the groups overlap, so all $n + 1$ are the same colour. Where is the error? The step from
$n = 1$ to $n = 2$: the "first 1" and "last 1" of two horses do not overlap. The inductive step must work for
**every** $n \ge$ base, and this one fails at the very first.

## 8.4 The binomial theorem and Pascal's triangle

Expand $(a + b)^n$ for small $n$:

$$
\begin{aligned}
(a+b)^0 &= 1 \\
(a+b)^1 &= a + b \\
(a+b)^2 &= a^2 + 2ab + b^2 \\
(a+b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3 \\
(a+b)^4 &= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4 .
\end{aligned}
$$

The coefficients form **Pascal's triangle**: each row starts and ends with 1, and every inner number is the sum of
the two above it.

```
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5  10  10   5   1
1   6  15  20  15   6   1
```

**Binomial coefficients.** For whole numbers $0 \le k \le n$, the **binomial coefficient** "$n$ choose $k$" is

$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!}, \qquad n! = 1 \cdot 2 \cdots n, \quad 0! = 1 .
$$

It counts the ways to choose $k$ objects from $n$, ignoring order. *Why:* lining up $k$ of the $n$ objects in order
can be done in $n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$ ways, and each unordered choice of $k$ objects appears in
$k!$ orders, so divide by $k!$. For example $\binom{5}{2} = \frac{120}{2 \cdot 6} = 10$: from $\{A, B, C, D, E\}$ the pairs are
AB, AC, AD, AE, BC, BD, BE, CD, CE, DE.

**Pascal's rule.** For $1 \le k \le n$,

$$
\binom{n}{k-1} + \binom{n}{k} = \binom{n+1}{k} .
$$

*Proof by counting.* Choose $k$ people from $n + 1$, one of whom is called Ada. The choices that include Ada pick
$k - 1$ more from the other $n$: $\binom{n}{k-1}$ ways. Those that exclude Ada pick all $k$ from the other $n$:
$\binom{n}{k}$ ways. Together these are all $\binom{n+1}{k}$ choices.

*Proof by algebra.* Over the common denominator $k!\,(n-k+1)!$,

$$
\frac{n!}{(k-1)!\,(n-k+1)!} + \frac{n!}{k!\,(n-k)!} = \frac{n!\,\left[k + (n - k + 1)\right]}{k!\,(n-k+1)!} = \frac{(n+1)!}{k!\,(n+1-k)!} . \qquad \square
$$

Pascal's rule *is* the rule "add the two above", so the entries of the triangle are the binomial coefficients.

**Theorem 8.1 (binomial theorem).** For any numbers $a$, $b$ and whole $n \ge 0$,

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k .
$$

*Why, in one sentence.* Multiplying out $(a + b)(a + b)\cdots(a + b)$ means choosing $a$ or $b$ from each of the $n$
brackets; the term $a^{n-k}b^k$ arises once for each way of choosing which $k$ brackets give $b$, which is
$\binom{n}{k}$ ways.

*Proof by induction.* $n = 0$: both sides are 1. Assume the formula for $n$. Then

$$
(a+b)^{n+1} = (a + b)\sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = \sum_{k=0}^{n} \binom{n}{k} a^{n+1-k} b^k + \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k+1} .
$$

In the second sum shift the index ($k \to k - 1$) so it reads $\sum_{k=1}^{n+1} \binom{n}{k-1} a^{n+1-k} b^k$. Now
collect the terms with the same $b^k$. For $1 \le k \le n$ the coefficient is $\binom{n}{k} + \binom{n}{k-1} = \binom{n+1}{k}$
by Pascal's rule. The end terms are $a^{n+1}$ (from $k = 0$) and $b^{n+1}$ (from $k = n + 1$), with coefficient
$1 = \binom{n+1}{0} = \binom{n+1}{n+1}$. That is the formula for $n + 1$. $\square$

**Example 13.** $(x + 2)^5 = x^5 + 5 \cdot 2 x^4 + 10 \cdot 4 x^3 + 10 \cdot 8 x^2 + 5 \cdot 16 x + 32
= x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32$. Check at $x = 1$: $3^5 = 243$ and $1 + 10 + 40 + 80 + 80 + 32 = 243$.

**Example 14.** The coefficient of $x^3$ in $(2x - 1)^7$: the term with $(2x)^3$ is
$\binom{7}{3}(2x)^3(-1)^4 = 35 \cdot 8 x^3 = 280x^3$.

**Example 15.** The constant term in $\left(x^2 + \frac1x\right)^6$: the general term is
$\binom{6}{k}(x^2)^{6-k}(x^{-1})^k = \binom6k x^{12 - 3k}$, constant when $k = 4$: $\binom64 = 15$.

**Consequences.** Put $a = b = 1$: $\sum_{k=0}^n \binom{n}{k} = 2^n$, the number of subsets of an $n$-element set (each
element is in or out). Put $a = 1$, $b = -1$: $\sum_{k=0}^n (-1)^k \binom nk = 0$ for $n \ge 1$, so a set has as many
even-sized subsets as odd-sized ones. And for small $x$, the first terms give quick approximations:
$1.01^{10} = (1 + 0.01)^{10} \approx 1 + 10(0.01) + 45(0.0001) = 1.1045$, while the true value is $1.10462\dots$.

The binomial theorem was used in [Chapter 7](07-Exponents-and-Logarithms.md) to show $(1 + 1/n)^n < 3$. Newton
extended it, around 1665, to exponents that are not whole numbers, where the sum becomes infinite; that is a
calculus result (see [MAT137 Unit 14](../../uoft/MAT137/unit14.md)).

**History.** The triangle is much older than Pascal. It appears in the work of al-Karaji in Baghdad around 1000
(known through later writers), in Yang Hui's book of 1261 in China (which credits the earlier Jia Xian), and in Indian
writing on metres in poetry. Blaise Pascal's *Traité du triangle arithmétique* (written about 1654, published 1665)
gathered its properties systematically and, in proving them, gave one of the first clear statements of the
inductive method. Francesco Maurolico had used induction-style arguments in 1575.

## 8.5 Recurrences and Binet's formula

*Level: advanced.*

In his *Liber Abaci* of 1202, Leonardo of Pisa (later called Fibonacci) posed a puzzle about breeding rabbits whose
answer is the sequence

$$
F_0 = 0, \quad F_1 = 1, \quad F_{n+1} = F_n + F_{n-1} : \qquad 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \dots
$$

Each term is the sum of the two before. Can we find $F_{100}$ without computing all 99 before it?

**Guess a geometric solution.** Look for solutions of $x_{n+1} = x_n + x_{n-1}$ of the form $x_n = r^n$. Then
$r^{n+1} = r^n + r^{n-1}$; dividing by $r^{n-1}$ gives the **characteristic equation**

$$
r^2 = r + 1, \qquad r^2 - r - 1 = 0, \qquad r = \frac{1 \pm \sqrt5}{2} .
$$

Call the roots $\varphi = \frac{1 + \sqrt5}{2} \approx 1.618$ (the **golden ratio**) and $\psi = \frac{1 - \sqrt5}{2} \approx -0.618$.
Both $\varphi^n$ and $\psi^n$ satisfy the recurrence, and so does any combination $A\varphi^n + B\psi^n$, because the
recurrence is **linear**: if two sequences satisfy it, so does any sum of multiples of them. Choose $A$ and $B$ to
match the start: $n = 0$ gives $A + B = 0$; $n = 1$ gives $A\varphi + B\psi = 1$. So $B = -A$ and $A(\varphi - \psi) = 1$,
with $\varphi - \psi = \sqrt5$. This gives **Binet's formula**:

$$
F_n = \frac{\varphi^n - \psi^n}{\sqrt5} .
$$

**Theorem 8.2.** Binet's formula holds for every $n \ge 0$.

*Proof by strong induction.* $n = 0$: $(1 - 1)/\sqrt5 = 0 = F_0$. $n = 1$: $(\varphi - \psi)/\sqrt5 = 1 = F_1$. For the step,
assume the formula for $n$ and $n - 1$. Since $\varphi^2 = \varphi + 1$, multiplying by $\varphi^{n-1}$ gives
$\varphi^{n+1} = \varphi^n + \varphi^{n-1}$, and the same for $\psi$. So

$$
F_{n+1} = F_n + F_{n-1} = \frac{(\varphi^n + \varphi^{n-1}) - (\psi^n + \psi^{n-1})}{\sqrt5} = \frac{\varphi^{n+1} - \psi^{n+1}}{\sqrt5} . \qquad \square
$$

It is remarkable that a formula full of $\sqrt5$ always gives a whole number. There is more. Since $|\psi| < 1$, the
term $\psi^n/\sqrt5$ is less than $1/2$ in size for every $n \ge 0$, so

$$
F_n = \text{the whole number nearest to } \frac{\varphi^n}{\sqrt5} .
$$

Check: $\varphi^{10}/\sqrt5 \approx 122.992/2.236 \approx 55.004$, and $F_{10} = 55$. Also $F_{30} = 832\,040$. And
$F_{n+1}/F_n \to \varphi$: the ratios $8/5 = 1.6$, $89/55 \approx 1.61818$, $10946/6765 \approx 1.6180340$ close in on $1.6180339887\dots$.
So the Fibonacci numbers grow exponentially, like $\varphi^n$. The formula was published by Jacques Binet in 1843;
Abraham de Moivre and Daniel Bernoulli had found it more than a century earlier.

**The general method.** The same idea solves every **linear recurrence with constant coefficients** of order two,

$$
a_{n+1} = p\,a_n + q\,a_{n-1} \qquad (q \neq 0).
$$

**Theorem 8.3.** Let $r^2 - pr - q = 0$ be the characteristic equation.

1. If it has two different roots $r_1 \neq r_2$, every solution is $a_n = A r_1^n + B r_2^n$.
2. If it has a repeated root $r$, every solution is $a_n = (A + Bn) r^n$.

The constants $A$, $B$ are fixed by $a_0$ and $a_1$.

*Proof.* A solution is completely determined by $a_0$ and $a_1$, since the recurrence then computes every later term.
So it is enough to show that the proposed formula satisfies the recurrence and can match any $a_0$, $a_1$.

Case 1: $r_i^n$ satisfies the recurrence because $r_i^{n+1} - p r_i^n - q r_i^{n-1} = r_i^{n-1}(r_i^2 - pr_i - q) = 0$, and by
linearity so does $Ar_1^n + Br_2^n$. Matching: $A + B = a_0$ and $Ar_1 + Br_2 = a_1$, a linear system with determinant
$r_2 - r_1 \neq 0$, so it has a unique solution ([Chapter 3](03-Lines-and-Linear-Systems.md)).

Case 2: a repeated root means $r^2 - pr - q = (x - r)^2$ as polynomials, so $p = 2r$ and $q = -r^2$ (and $r \neq 0$ since
$q \neq 0$). Check that $nr^n$ is a solution:
$p \cdot nr^n + q \cdot (n-1)r^{n-1} = 2nr^{n+1} - (n-1)r^{n+1} = (n+1)r^{n+1}$. Matching: $A = a_0$ and $(A + B)r = a_1$, solvable since $r \neq 0$. $\square$

(If the roots are not real, case 1 still works with complex numbers, the subject of [Chapter 9](09-Complex-Numbers.md),
and the answer comes out real in the end, often with sines and cosines.)

**Example 16.** $a_0 = 1$, $a_1 = 4$, $a_{n+1} = 5a_n - 6a_{n-1}$. Characteristic equation $r^2 - 5r + 6 = 0$, roots 2 and 3.
So $a_n = A \cdot 2^n + B \cdot 3^n$ with $A + B = 1$, $2A + 3B = 4$, giving $B = 2$, $A = -1$:

$$
a_n = 2 \cdot 3^n - 2^n .
$$

Check: the recurrence gives $a_2 = 20 - 6 = 14$, $a_3 = 70 - 24 = 46$; the formula gives $18 - 4 = 14$ and $54 - 8 = 46$.

**Example 17 (repeated root).** $b_0 = 1$, $b_1 = 6$, $b_{n+1} = 4b_n - 4b_{n-1}$. Here $r^2 - 4r + 4 = (r - 2)^2$, so
$b_n = (A + Bn)2^n$. $A = 1$, and $(1 + B) \cdot 2 = 6$ gives $B = 2$: $b_n = (1 + 2n)2^n$. Check: recurrence gives
$b_2 = 24 - 4 = 20$; formula gives $5 \cdot 4 = 20$.

**Example 18 (the Tower of Hanoi).** Moving a tower of $n$ discs (never a larger on a smaller) takes $h_n$ moves,
where $h_1 = 1$ and $h_n = 2h_{n-1} + 1$: move the top $n - 1$ aside, move the biggest, move the $n - 1$ back on top. This
recurrence has a constant term, so it is not of the form above; but $h_n + 1$ satisfies $(h_n + 1) = 2(h_{n-1} + 1)$,
a geometric sequence starting at 2. So $h_n + 1 = 2^n$ and $h_n = 2^n - 1$. (One can also show no method uses fewer moves.)

**Try it in Python.**

```python
from math import sqrt
phi, psi = (1 + sqrt(5)) / 2, (1 - sqrt(5)) / 2
F = [0, 1]
for n in range(2, 31):
    F.append(F[-1] + F[-2])
print(F[30], round(phi**30 / sqrt(5)))      # 832040 832040
print(all(F[n] == round((phi**n - psi**n) / sqrt(5)) for n in range(31)))   # True
```

(Floating-point arithmetic eventually rounds wrongly for large $n$, somewhere past $n = 70$; the integer
recurrence never does.)

## 8.6 Infinite geometric series and a first look at convergence

*Level: advanced.*

Walk halfway to a wall, then half the remaining distance, then half again. The distances are
$\frac12, \frac14, \frac18, \dots$ of the original. You never take a "last" step, yet you clearly do not go beyond the
wall. Zeno of Elea, in the fifth century BC, used puzzles like this to argue that motion is paradoxical. The modern
answer is that an infinite sum can have a finite value, if "value" is defined carefully.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 292" role="img" aria-label="A unit square cut in half, then the remaining half cut in half, and so on; the pieces one half, one quarter, one eighth and so on fill the whole square">
  <rect x="20.0" y="20.0" width="120.0" height="240.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="145" font-size="18" text-anchor="middle" fill="currentColor">1/2</text>
  <rect x="140.0" y="20.0" width="120.0" height="120.0" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="200" y="85" font-size="16" text-anchor="middle" fill="currentColor">1/4</text>
  <rect x="140.0" y="140.0" width="60.0" height="120.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="170" y="205" font-size="13" text-anchor="middle" fill="currentColor">1/8</text>
  <rect x="200.0" y="140.0" width="60.0" height="60.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="230" y="175" font-size="11" text-anchor="middle" fill="currentColor">1/16</text>
  <rect x="200.0" y="200.0" width="30.0" height="60.0" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="215" y="235" font-size="9" text-anchor="middle" fill="currentColor">1/32</text>
  <rect x="230.0" y="200.0" width="30.0" height="30.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <rect x="230.0" y="230.0" width="15.0" height="30.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <rect x="245.0" y="230.0" width="15.0" height="15.0" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <rect x="20" y="20" width="240" height="240" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="140" y="282" font-size="12" text-anchor="middle" fill="currentColor">1/2 + 1/4 + 1/8 + 1/16 + ... fills the whole square</text>
</svg>
</div>

**Partial sums.** For a sequence $a_1, a_2, \dots$ the **series** $\sum_{k=1}^\infty a_k$ means the following. Form the
**partial sums**

$$
s_n = a_1 + a_2 + \cdots + a_n .
$$

If the sequence $s_n$ approaches a number $S$, we say the series **converges** to $S$ and write $\sum_{k=1}^\infty a_k = S$.
Otherwise it **diverges**. An infinite sum is not "doing infinitely many additions"; it is the limit of finite ones.

**What "approaches" means.** A sequence $s_n$ has **limit** $S$ if, for every tolerance $\varepsilon > 0$ (however
small), there is an index $N$ such that $|s_n - S| < \varepsilon$ for every $n \ge N$. In words: whatever accuracy
you demand, from some point on all the terms meet it. This definition, worked out in the nineteenth century by
Cauchy, Bolzano and Weierstrass, is what makes the whole of calculus rigorous.

**Lemma 8.4.** If $|r| < 1$ then $r^n \to 0$.

*Proof.* If $r = 0$ it is clear. Otherwise $1/|r| > 1$, so write $1/|r| = 1 + h$ with $h > 0$. By Bernoulli's
inequality, $(1 + h)^n \ge 1 + nh > nh$, so $|r|^n = \frac{1}{(1+h)^n} < \frac{1}{nh}$. Given $\varepsilon > 0$, choose
$N > \frac{1}{h\varepsilon}$; then for $n \ge N$, $|r^n - 0| < \frac{1}{nh} \le \frac{1}{Nh} < \varepsilon$. $\square$

**Theorem 8.5.** The geometric series $a + ar + ar^2 + \cdots$ (with $a \neq 0$) converges if and only if $|r| < 1$, and then

$$
\sum_{k=0}^{\infty} a r^k = \frac{a}{1 - r} .
$$

*Proof.* The partial sum is $s_n = a\frac{1 - r^n}{1 - r}$ for $r \neq 1$ (§8.1). If $|r| < 1$, then
$s_n - \frac{a}{1-r} = -\frac{a r^n}{1 - r}$, which tends to 0 by the lemma. If $|r| \ge 1$, the terms $ar^k$ do not
shrink to 0 (their size is at least $|a|$); but in a convergent series the terms must tend to 0, since
$a_n = s_n - s_{n-1}$ and both $s_n$ and $s_{n-1}$ approach the same $S$. So the series diverges. $\square$

**Example 19.** $\frac12 + \frac14 + \frac18 + \cdots = \dfrac{1/2}{1 - 1/2} = 1$. Zeno's walker reaches the wall: the
picture above shows the pieces filling the whole square.

**Example 20 (repeating decimals).** $0.999\ldots = \frac{9}{10} + \frac{9}{100} + \cdots = \dfrac{9/10}{1 - 1/10} = 1$.
This is not "almost 1": by the definition, the value of the series is exactly 1. Likewise
$0.272727\ldots = \dfrac{27/100}{1 - 1/100} = \dfrac{27}{99} = \dfrac{3}{11}$. Every repeating decimal is a geometric series,
which is why every repeating decimal is a fraction.

**Example 21 (a bouncing ball).** A ball dropped from 10 m rebounds to $3/5$ of its previous height each time. Total
distance travelled: down 10, then up and down $6$, then up and down $3.6$, and so on:

$$
10 + 2\left(6 + 3.6 + 2.16 + \cdots\right) = 10 + 2 \cdot \frac{6}{1 - 3/5} = 10 + 2 \cdot 15 = 40 \text{ m} .
$$

**Terms going to zero is not enough.** The **harmonic series** $1 + \frac12 + \frac13 + \frac14 + \cdots$ has terms
shrinking to 0, but it diverges. Nicole Oresme gave this proof in the fourteenth century. Group the terms:

$$
1 + \frac12 + \left(\frac13 + \frac14\right) + \left(\frac15 + \cdots + \frac18\right) + \left(\frac19 + \cdots + \frac1{16}\right) + \cdots
$$

Each bracket has $2^{j}$ terms each at least $\frac{1}{2^{j+1}}$, so each bracket is at least $\frac12$. Infinitely many
halves add up past any bound. $\square$ It diverges very slowly: the partial sums first pass 10 at $n = 12\,367$.

**But $\sum 1/n^2$ converges.** Its terms shrink faster. For $k \ge 2$, $\frac{1}{k^2} < \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac1k$,
so by telescoping

$$
s_n = 1 + \sum_{k=2}^{n} \frac{1}{k^2} < 1 + \left(1 - \frac1n\right) < 2 .
$$

The partial sums increase and stay below 2, so (by completeness of the real numbers, as for $e$ in
[Chapter 7](07-Exponents-and-Logarithms.md)) they converge. The exact value is $\pi^2/6 \approx 1.6449$, found by Euler
in the 1730s; this was the famous *Basel problem*, and the proof needs more than algebra.

**What comes next.** Deciding whether series converge, and computing their sums, is the subject of the
analysis courses: comparison tests, ratio tests, power series such as $e^x = \sum x^k/k!$, and the subtle behaviour of
series like $1 - \frac12 + \frac13 - \frac14 + \cdots$, which converges (to $\ln 2$) but whose terms can be rearranged to
add up to any number you like (Riemann's rearrangement theorem). See [MAT137 Unit 13](../../uoft/MAT137/unit13.md)
and [MAT159H1 Unit 5](../../uoft/MAT159H1/unit05.md).

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A geometric sequence and its running sum. With a ratio between −1 and 1 the sum settles towards a / (1 − r).</figcaption></figure>

## Check yourself

??? question "1. The 4th term of an arithmetic sequence is 17 and the 10th is 41. Find the first term, the common difference, and the sum of the first 20 terms."

    $a + 3d = 17$ and $a + 9d = 41$ give $6d = 24$, $d = 4$, $a = 5$. $a_{20} = 5 + 19 \cdot 4 = 81$, so
    $S_{20} = 20(5 + 81)/2 = 860$.

??? question "2. Find $\displaystyle\sum_{k=1}^{8} 3 \cdot 2^{k}$."

    It is $6 + 12 + \cdots + 768$, geometric with first term 6, ratio 2, 8 terms: $6 \cdot \frac{2^8 - 1}{2 - 1} = 6 \cdot 255 = 1530$.

??? question "3. Use telescoping to find $\displaystyle\sum_{k=1}^{n} \frac{2}{k(k+2)}$."

    $\dfrac{2}{k(k+2)} = \dfrac1k - \dfrac1{k+2}$. Writing out the terms, each $-\frac1{k+2}$ cancels the $+\frac1{k+2}$ two
    places later, leaving $1 + \frac12 - \frac{1}{n+1} - \frac{1}{n+2}$. Check with $n = 1$: $\frac23$ and $\frac32 - \frac12 - \frac13 = \frac23$.

??? question "4. Prove by induction: $1 \cdot 2 + 2 \cdot 3 + \cdots + n(n+1) = \dfrac{n(n+1)(n+2)}{3}$."

    Base $n = 1$: $2 = \frac{1 \cdot 2 \cdot 3}{3}$. Step: assume it for $n$. Then the sum to $n + 1$ is
    $\frac{n(n+1)(n+2)}{3} + (n+1)(n+2) = \frac{(n+1)(n+2)(n + 3)}{3}$, the formula for $n + 1$.

??? question "5. Prove that $6$ divides $n^3 - n$ for every $n \ge 1$."

    By induction: $n = 1$ gives 0. If $6 \mid n^3 - n$, then $(n+1)^3 - (n+1) = (n^3 - n) + 3n^2 + 3n = (n^3 - n) + 3n(n+1)$.
    $n(n+1)$ is even (one of two consecutive numbers is even), so $3n(n+1)$ is a multiple of 6. Alternatively:
    $n^3 - n = (n-1)n(n+1)$ is a product of three consecutive numbers, so it is divisible by 2 and by 3.

??? question "6. Prove that $F_1 + F_2 + \cdots + F_n = F_{n+2} - 1$ for the Fibonacci numbers."

    Base $n = 1$: $F_1 = 1 = F_3 - 1 = 2 - 1$. Step: $(F_{n+2} - 1) + F_{n+1} = F_{n+3} - 1$. Check: the first 10 add to 143 and $F_{12} = 144$.

??? question "7. Find the coefficient of $x^4$ in $(3 - 2x)^6$ and the sum of all its coefficients."

    The term is $\binom64 3^2(-2x)^4 = 15 \cdot 9 \cdot 16 x^4 = 2160x^4$. The sum of all coefficients is the value at $x = 1$: $(3 - 2)^6 = 1$.

??? question "8. Prove that $\displaystyle\sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n}$."

    Count committees of $n$ from $n$ women and $n$ men. Choosing $k$ women and $n - k$ men can be done in
    $\binom nk\binom{n}{n-k} = \binom nk^2$ ways; sum over $k$. (Check $n = 3$: $1 + 9 + 9 + 1 = 20 = \binom63$.)

??? question "9. Solve $a_0 = 2$, $a_1 = 1$, $a_{n+1} = a_n + 6a_{n-1}$."

    $r^2 - r - 6 = (r - 3)(r + 2)$. So $a_n = A \cdot 3^n + B(-2)^n$, $A + B = 2$, $3A - 2B = 1$, giving $A = 1$, $B = 1$:
    $a_n = 3^n + (-2)^n$. Check: $a_2 = 1 + 12 = 13 = 9 + 4$.

??? question "10. Prove Cassini's identity $F_{n+1}F_{n-1} - F_n^2 = (-1)^n$ for $n \ge 1$."

    Base $n = 1$: $F_2F_0 - F_1^2 = 0 - 1 = -1$. Step: assume it for $n$. Then
    $F_{n+2}F_n - F_{n+1}^2 = (F_{n+1} + F_n)F_n - F_{n+1}(F_n + F_{n-1}) = F_n^2 - F_{n+1}F_{n-1} = -(-1)^n = (-1)^{n+1}$.

??? question "11. Find the sum of $\displaystyle\sum_{k=1}^{\infty} \frac{2^k + 3^k}{6^k}$."

    Split: $\sum (1/3)^k + \sum (1/2)^k = \frac{1/3}{2/3} + \frac{1/2}{1/2} = \frac12 + 1 = \frac32$. (Splitting is allowed because both parts converge.)

??? question "12. For which $x$ does $1 + 2x + 4x^2 + 8x^3 + \cdots$ converge, and to what?"

    It is geometric with ratio $2x$, so it converges exactly when $|2x| < 1$, that is $-\frac12 < x < \frac12$, with sum $\dfrac{1}{1 - 2x}$.

## What you learned

- Arithmetic sequences add a constant and sum to (number of terms) times (average of the ends); geometric sequences
  multiply by a constant and sum to $a\frac{1 - r^n}{1 - r}$.
- Sigma notation is linear; index shifts line sums up, and telescoping sums collapse to two terms, which can even
  discover formulas such as $\sum k^2$.
- Induction proves $P(n)$ for all $n$ from a base case and an inductive step; it is valid because every non-empty set
  of positive integers has a least element. Strong induction assumes all earlier cases.
- The binomial theorem $(a+b)^n = \sum \binom nk a^{n-k}b^k$ follows from Pascal's rule by induction, and binomial
  coefficients count choices.
- Linear recurrences are solved through their characteristic equation; for Fibonacci this gives Binet's formula
  $F_n = (\varphi^n - \psi^n)/\sqrt5$.
- An infinite series is the limit of its partial sums; the geometric series converges exactly when $|r| < 1$, to
  $a/(1 - r)$, while the harmonic series diverges even though its terms shrink to 0.

**Next:** [Chapter 9](09-Complex-Numbers.md), the complex numbers, which make every quadratic solvable and turn multiplication into rotation.

## Further reading

- R. L. Graham, D. E. Knuth and O. Patashnik, *Concrete Mathematics*, 2nd edition, 1994, Chapters 1, 2, 5 and 7 (recurrences, sums, binomial coefficients, generating functions).
- D. J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019, Chapter 6 ("Mathematical Induction").
- A. Engel, *Problem-Solving Strategies*, 1998, the chapter on the induction principle.
- H. S. Wilf, *generatingfunctionology*, 1990 (a further road from recurrences).
- J. Stillwell, *Mathematics and Its History*, 3rd edition, 2010 (for the history of Pascal's triangle, induction and infinite series).
- On this site: the Topics lessons [Sigma notation](../../topics/patterns/level-7/01-sigma-notation.md),
  [Arithmetic series](../../topics/patterns/level-7/02-arithmetic-series.md),
  [The golden ratio](../../topics/patterns/level-7/04-golden-ratio.md),
  [More induction](../../topics/patterns/level-8/02-more-induction.md),
  [Strong induction](../../topics/patterns/level-8/03-strong-induction.md) and
  [Solving recurrences](../../topics/patterns/level-8/04-solving-recurrences.md); the U of T guides
  [MAT137 Unit 11: Sequences](../../uoft/MAT137/unit11.md),
  [MAT137 Unit 13: Series](../../uoft/MAT137/unit13.md) and
  [MAT159H1 Unit 5: Infinite Series](../../uoft/MAT159H1/unit05.md); and the [Algebra book's contents](index.md).
