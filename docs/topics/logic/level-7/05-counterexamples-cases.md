---
title: "Counterexamples and cases"
---

# Counterexamples and cases

*Logic and puzzles · level 7, lesson 5 of 6*

## A question to start

Work out $n^2 + n + 41$ for $n = 0, 1, 2, 3, \ldots$

$$41, \quad 43, \quad 47, \quad 53, \quad 61, \quad 71, \quad 83, \quad 97, \quad 113, \quad 131, \quad \ldots$$

Every one is a **prime**. It goes on giving primes all the way to $n = 39$, which gives 1601. Forty primes in a
row. Leonhard Euler wrote about this remarkable formula in the 1700s. Is it **always** prime?

Before reaching for a calculator, look at $n = 40$:

$$40^2 + 40 + 41 = 40 \times 40 + 40 + 41 = 40 \times 41 + 41 = 41 \times 41.$$

Not prime. One number knocked down forty examples. This lesson is about that kind of number, a
**counterexample**, and about its partner: proving a statement by splitting it into **cases**.

## The idea

### One counterexample is enough

A statement like "$n^2 + n + 41$ is prime for every whole number $n$" is a **for all** statement. In symbols,
$\forall n,\ P(n)$. From [Quantifiers](../level-5/04-quantifiers.md), its negation is

$$\neg\big(\forall n,\ P(n)\big) \equiv \exists n,\ \neg P(n).$$

"Not every $n$ works" means "some $n$ fails". So to show a for-all statement is **false**, you need exactly one
$n$ that fails, and nothing more. That $n$ is a **counterexample**. The number 40 is a complete disproof. No essay,
no algebra, no more cases needed.

### The four jobs

Statements with "for all" and "there exists" need different kinds of work.

| Statement | To prove it | To disprove it |
| --- | --- | --- |
| for all $x$, $P(x)$ | a general argument (a proof) | **one** counterexample |
| there exists $x$ with $P(x)$ | **one** example | a general argument that every $x$ fails |

Notice the mirror. One example settles two of the jobs; the other two need real proofs. A common mistake is to use
an example for the wrong job: giving one example to "prove" a for-all statement.

### What a counterexample must do

For a statement "for all $x$, if $p(x)$ then $q(x)$", a counterexample is an $x$ that **satisfies the hypothesis**
and **fails the conclusion**. For "every prime is odd", the counterexample must be a prime (hypothesis) that is not
odd (conclusion fails): that is 2. The number 9 is not a counterexample: it is odd and not prime, which says nothing
about whether primes are odd.

### How to hunt for counterexamples

- **Try the edge cases first**: 0, 1, $-1$, 2, negative numbers, fractions, equal numbers, empty sets. Many false
  claims were made by someone thinking only of "ordinary" numbers.
- **Look for structure that forces a failure.** For $n^2 + n + 41 = n(n + 1) + 41$, choosing $n = 41$ or $n = 40$
  makes every term a multiple of 41. Making an expression factor is the classic trick.
- **Do not give up after the first few tries.** The circle pieces in [lesson 1](01-what-a-proof-is.md) fail at the
  sixth case, Euler's formula at the forty-first.

### Proof by cases

Sometimes a statement is easier to prove in pieces. **Proof by cases** splits all the possibilities into a few
cases that **together cover everything**, and proves the statement in each case. The logic is the rule

$$\big((p \lor q) \land (p \to r) \land (q \to r)\big) \to r.$$

If every number is even or odd, and the statement holds for even numbers, and it holds for odd numbers, then it
holds for every number. The cases must be **exhaustive** (cover all possibilities); they may overlap, but usually
they do not.

**Theorem.** For every integer $n$, the number $n^2 + n$ is even.

**Proof.** Every integer is even or odd; we take the two cases.

- *Case 1: $n$ is even*, $n = 2k$. Then $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, which is even.
- *Case 2: $n$ is odd*, $n = 2k + 1$. Then $n^2 + n = 4k^2 + 4k + 1 + 2k + 1 = 4k^2 + 6k + 2 = 2(2k^2 + 3k + 1)$,
  which is even.

In both cases $n^2 + n$ is even, and the cases cover all integers. ∎

There is also a neat picture reason. Since $n^2 + n = n(n + 1)$, draw an $n$ by $(n + 1)$ rectangle of squares. A
staircase cuts it into two pieces of the same shape (turn one piece upside down and it fits the other exactly).
So the rectangle has an even number of squares: twice the number in one staircase.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 230 165" role="img" aria-label="A 4 by 5 rectangle of squares cut by a staircase into two equal pieces of 10 squares each">
  <g stroke="currentColor" stroke-width="1">
    <rect x="40" y="20" width="30" height="30" fill="#eea66f"/>
    <rect x="70" y="20" width="30" height="30" fill="#9cc9ea"/>
    <rect x="100" y="20" width="30" height="30" fill="#9cc9ea"/>
    <rect x="130" y="20" width="30" height="30" fill="#9cc9ea"/>
    <rect x="160" y="20" width="30" height="30" fill="#9cc9ea"/>
    <rect x="40" y="50" width="30" height="30" fill="#eea66f"/>
    <rect x="70" y="50" width="30" height="30" fill="#eea66f"/>
    <rect x="100" y="50" width="30" height="30" fill="#9cc9ea"/>
    <rect x="130" y="50" width="30" height="30" fill="#9cc9ea"/>
    <rect x="160" y="50" width="30" height="30" fill="#9cc9ea"/>
    <rect x="40" y="80" width="30" height="30" fill="#eea66f"/>
    <rect x="70" y="80" width="30" height="30" fill="#eea66f"/>
    <rect x="100" y="80" width="30" height="30" fill="#eea66f"/>
    <rect x="130" y="80" width="30" height="30" fill="#9cc9ea"/>
    <rect x="160" y="80" width="30" height="30" fill="#9cc9ea"/>
    <rect x="40" y="110" width="30" height="30" fill="#eea66f"/>
    <rect x="70" y="110" width="30" height="30" fill="#eea66f"/>
    <rect x="100" y="110" width="30" height="30" fill="#eea66f"/>
    <rect x="130" y="110" width="30" height="30" fill="#eea66f"/>
    <rect x="160" y="110" width="30" height="30" fill="#9cc9ea"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="115" y="158">n = 4: 4 × 5 = 20 = 10 + 10</text>
    <text x="22" y="85">4</text>
    <text x="115" y="14">5</text>
  </g>
</svg>
</div>

### Choosing the cases

The art is in choosing cases that each give you something to calculate with:

- **parity**: even or odd ($n = 2k$ or $n = 2k + 1$);
- **remainders**: for questions about 3, the cases $n = 3k$, $3k + 1$, $3k + 2$; for 4, four cases;
- **last digit**: ten cases, $0$ to $9$, for questions about the last digit of a square or a power;
- **sign**: $x > 0$, $x = 0$, $x < 0$, especially with absolute values, where $|x| = x$ if $x \ge 0$ and $|x| = -x$
  if $x < 0$;
- **which is bigger**: $a \ge b$ or $a < b$.

Too few cases leaves a gap (a case nobody checked). Too many is only slow, never wrong.

## Worked examples

**1. Why exactly 40?** Show that $n^2 + n + 41$ is not prime for $n = 40$ and for $n = 41$.

- $n = 40$: $40^2 + 40 + 41 = 40(40 + 1) + 41 = 41 \times 40 + 41 \times 1 = 41 \times 41 = 1681$.
- $n = 41$: $41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 \times 43 = 1763$.

Both are products of two numbers bigger than 1, so neither is prime. Either is a counterexample. Can **any**
polynomial with whole-number coefficients give only primes? No (except a constant one): if $f(1) = p$ is prime, then
$f(1 + p)$, $f(1 + 2p)$, ... are all multiples of $p$, and a non-constant polynomial grows, so eventually one of
them is bigger than $p$ and not prime.

**2. Primes that are not.** The numbers $2^n - 1$ for prime $n$ start $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$,
$2^7 - 1 = 127$, all prime. Claim: "if $n$ is prime, then $2^n - 1$ is prime." Counterexample: $n = 11$ is prime,
and $2^{11} - 1 = 2047 = 23 \times 89$. (The primes of this form are called Mersenne primes, and the search for
them continues; see [Number theory](../../number-theory/index.md).)

**3. Last digits of squares.** Prove that no perfect square ends in 2, 3, 7 or 8.

**Proof.** The last digit of $n^2$ depends only on the last digit of $n$ (the other digits only add multiples of 10).
Take the ten cases for the last digit $d$ of $n$:

| $d$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| last digit of $d^2$ | 0 | 1 | 4 | 9 | 6 | 5 | 6 | 9 | 4 | 1 |

The last digits that occur are 0, 1, 4, 5, 6, 9. So 2, 3, 7 and 8 never occur. ∎ So 1 000 007 is not a square,
without any square roots.

**4. Squares on a clock of 4, and sums of two squares.** Prove that no integer leaving remainder 3 on division by
4 is a sum of two squares.

**Step 1 (cases).** Every square leaves remainder 0 or 1 on division by 4. *Case $n$ even*, $n = 2k$:
$n^2 = 4k^2$, remainder 0. *Case $n$ odd*, $n = 2k + 1$: $n^2 = 4(k^2 + k) + 1$, remainder 1.

**Step 2 (cases again).** A sum of two squares $a^2 + b^2$ therefore leaves remainder $0 + 0 = 0$, $0 + 1 = 1$, or
$1 + 1 = 2$. Never 3. ∎ So 3, 7, 11, 15, 19, ... are not sums of two squares. (Which numbers **are** is a beautiful
story: [Sums of two squares](../../number-theory/level-7/06-sums-two-squares.md).)

## Try it

1. Give a counterexample to each: (a) "Every prime greater than 2 leaves remainder 1 on division by 4." (b) "If
   $a^2 = b^2$, then $a = b$." (c) "The sum of two irrational numbers is irrational." (d) "$n^2 > n$ for every
   integer $n$."
2. Is $2^n > n^2$ for every whole number $n \ge 1$? Find all the counterexamples among $n = 1, 2, 3, 4, 5, 6$.
3. Why is 15 not a counterexample to "every prime is odd"?
4. Prove that "there exists an integer $n$ with $n^2 = 2n$" is true. How many examples do you need?
5. Prove by cases that for every real number $x$, $|x| \ge x$.
6. Prove by cases that $n^3 - n$ is divisible by 3 for every integer $n$.
7. Prove that for every integer $n$, $n^2$ leaves remainder 0 or 1 on division by 3, and deduce that $n^2 + 1$ is
   never divisible by 3.
8. Harder. Prove that for real numbers $a$ and $b$, the larger of the two equals $\frac{a + b + |a - b|}{2}$.

??? note "Answers"
    1. (a) 3 (or 7, 11, ...): $3 = 4 \times 0 + 3$. (b) $a = 2$, $b = -2$: $4 = 4$ but $2 \ne -2$. (c) $\sqrt2$
       and $-\sqrt2$ are irrational, but their sum is 0, which is rational. (d) $n = 0$ ($0 > 0$ is false), or
       $n = 1$.
    2. No. $n = 1$: $2 > 1$ ✓. $n = 2$: $4 > 4$ ✗. $n = 3$: $8 > 9$ ✗. $n = 4$: $16 > 16$ ✗. $n = 5$: $32 > 25$ ✓.
       $n = 6$: $64 > 36$ ✓. Counterexamples: 2, 3, 4. (From $n = 5$ on it is always true; that needs
       [induction](../../patterns/level-8/01-proof-by-induction.md).)
    3. A counterexample must satisfy the hypothesis (be prime) and fail the conclusion (be even). 15 is not prime.
    4. One example is enough: $n = 2$ gives $4 = 4$. ($n = 0$ also works.)
    5. *Case $x \ge 0$*: $|x| = x$, so $|x| \ge x$. *Case $x < 0$*: $|x| = -x > 0 > x$. ∎
    6. $n^3 - n = (n - 1)n(n + 1)$. *Case $n = 3k$*: the factor $n$ is divisible by 3. *Case $n = 3k + 1$*: the
       factor $n - 1 = 3k$ is. *Case $n = 3k + 2$*: the factor $n + 1 = 3k + 3 = 3(k + 1)$ is. In every case one
       factor is a multiple of 3, so the product is. ∎
    7. $n = 3k$: $n^2 = 3(3k^2)$, remainder 0. $n = 3k + 1$: $n^2 = 3(3k^2 + 2k) + 1$, remainder 1. $n = 3k + 2$:
       $n^2 = 3(3k^2 + 4k + 1) + 1$, remainder 1. So $n^2 + 1$ leaves remainder 1 or 2, never 0. ∎
    8. *Case $a \ge b$*: $|a - b| = a - b$, so the expression is $\frac{a + b + a - b}{2} = a$, the larger. *Case
       $a < b$*: $|a - b| = b - a$, so it is $\frac{a + b + b - a}{2} = b$, the larger. ∎

## Common mistake

**Using an example to prove a for-all statement.** One example can **disprove** "for all" or **prove** "there
exists". It cannot prove "for all".

**Missing a case.** Splitting integers into "positive" and "negative" forgets 0. Splitting by remainder on division
by 3 into "remainder 0" and "remainder 1" forgets remainder 2. Before proving the cases, check that together they
cover everything.

## Where it leads

- Back: [Proof by contradiction](04-proof-by-contradiction.md) · Next: [Paradoxes](06-paradoxes.md).
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- Patterns that hold for a long time and then fail: [Patterns that trick you](../../patterns/level-3/06-patterns-that-trick.md).
- Remainder cases are the heart of [Number theory](../../number-theory/index.md), for example
  [Congruence](../../number-theory/level-5/03-congruence.md).
- Proving a for-all statement about every whole number in a chain: [Proof by induction](../../patterns/level-8/01-proof-by-induction.md).
- On the U of T shelf: [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
