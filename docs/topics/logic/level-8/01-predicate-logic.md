---
title: "Predicate logic"
---

# Predicate logic

*Logic and puzzles · level 8, lesson 1 of 6*

## A question to start

"There are infinitely many prime numbers." Euclid proved it (see [Proof by contradiction](../level-7/04-proof-by-contradiction.md)).
But what does the sentence actually **say**? "Infinitely many" is a tricky phrase. Can you say the same thing using
only words like *every*, *some*, *bigger* and *prime*, with no mention of infinity?

Here is one way: **"For every number, there is a prime bigger than it."** If that is true, the primes never run
out: whatever number you name, there is a prime past it. And if the primes did run out at some largest prime $P$,
the number $P$ itself would have no prime bigger than it.

Now compare: **"There is a prime bigger than every number."** Same words, different order, and this one is false
(that prime would have to be bigger than itself). This lesson gives you a precise language, **predicate logic**, in
which the difference is impossible to miss, and in which even the most tangled statements can be negated
mechanically.

## The idea

### Why letters $p$ and $q$ are not enough

In [Statements and letters](../level-4/01-statements-letters.md), a whole statement was one letter: $p$ for "it is
raining". That cannot see **inside** a statement. Consider the old argument:

> All humans are mortal. Socrates is a human. So Socrates is mortal.

As letters it is "$p$, $q$, so $r$", which is not valid in general. The argument works because of what is inside
the sentences: the same property "human" appears in two of them, and "all" links them. We need a language that
talks about **objects** and their **properties**.

### Predicates, variables and the domain

- A **predicate** is a sentence with a gap for an object, which becomes a statement when the gap is filled. Write
  $\text{Prime}(x)$ for "$x$ is prime". Then $\text{Prime}(7)$ is true and $\text{Prime}(8)$ is false. $\text{Prime}(x)$
  on its own is neither: it is waiting for $x$.
- A predicate can have several gaps. $x < y$ and "$x$ divides $y$" are predicates with two gaps (also called
  **relations**).
- The **domain** is the set of objects the variables range over: the positive integers, the real numbers, the people
  in a room. The truth of a statement can depend on the domain. "There is an $x$ with $x^2 = 2$" is true in the real
  numbers and false in the rationals.
- The **quantifiers** $\forall$ ("for all") and $\exists$ ("there exists"), from
  [Quantifiers](../level-5/04-quantifiers.md), close the gaps. In $\forall x\ \text{Prime}(x)$ the variable $x$ is
  **bound** (taken care of by the quantifier); the result is a statement (here a false one).

Now Socrates. With the domain "everything", $H(x)$ for "$x$ is human" and $M(x)$ for "$x$ is mortal":

$$\forall x\,\big(H(x) \to M(x)\big), \qquad H(s), \qquad \text{therefore } M(s).$$

This is valid: the for-all statement holds for every $x$, in particular for $x = s$ (Socrates), giving
$H(s) \to M(s)$, and modus ponens finishes it. That step, from "for all $x$" to one particular $x$, is the most used
rule in all of mathematics.

### The two patterns

Two shapes appear again and again, and mixing them up is the commonest error in translation.

- **"All $A$ are $B$"** is $\forall x\,\big(A(x) \to B(x)\big)$. For everything: **if** it is an $A$, it is a $B$.
- **"Some $A$ is $B$"** is $\exists x\,\big(A(x) \land B(x)\big)$. Something is an $A$ **and** a $B$.

Why not $\forall x\,(A(x) \land B(x))$ for the first? That says *everything* is both an $A$ and a $B$: "everything
is a dog and barks", which is not what "all dogs bark" means. And why not $\exists x\,(A(x) \to B(x))$ for the
second? That is true as soon as anything at all is not an $A$ (a false "if" makes the conditional true, from
[The conditional](../level-4/03-conditional-promise.md)), so it says almost nothing.

### Translating step by step

Translate "Every number has a bigger prime" with domain the positive integers.

1. "Every number $n$ ...": $\forall n$.
2. "... has a prime $p$ ...": $\exists p$.
3. "... that is bigger than $n$ and is prime": $p > n \land \text{Prime}(p)$.

$$\forall n\ \exists p\ \big(p > n \land \text{Prime}(p)\big).$$

We can even unpack "prime" into symbols, using only multiplication and equality. A positive integer $p$ is prime if
$p > 1$ and whenever $p$ is a product $ab$ of positive integers, one of the factors is 1:

$$\text{Prime}(p) \;\equiv\; p > 1 \land \forall a\ \forall b\ \big(ab = p \to (a = 1 \lor b = 1)\big).$$

Everything in number theory can be written this way, using only variables, $+$, $\times$, $=$, $<$, the connectives
and the quantifiers. This fact matters a great deal in [lesson 4](04-godel-incompleteness.md).

### Order matters

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 175" role="img" aria-label="Left: for every x there is a y, each x has its own arrow to a possibly different y. Right: there is one y for every x, all arrows go to the same y.">
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="40" cy="30" r="9"/><circle cx="40" cy="65" r="9"/><circle cx="40" cy="100" r="9"/><circle cx="40" cy="135" r="9"/>
    <circle cx="260" cy="30" r="9"/><circle cx="260" cy="65" r="9"/><circle cx="260" cy="100" r="9"/><circle cx="260" cy="135" r="9"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="160" cy="30" r="9"/><circle cx="160" cy="65" r="9"/><circle cx="160" cy="100" r="9"/><circle cx="160" cy="135" r="9"/>
    <circle cx="380" cy="30" r="9"/><circle cx="380" cy="65" r="9"/><circle cx="380" cy="100" r="9"/><circle cx="380" cy="135" r="9"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="49" y1="30" x2="151" y2="65"/>
    <line x1="49" y1="65" x2="151" y2="30"/>
    <line x1="49" y1="100" x2="151" y2="135"/>
    <line x1="49" y1="135" x2="151" y2="100"/>
    <line x1="269" y1="30" x2="371" y2="65"/>
    <line x1="269" y1="65" x2="371" y2="65"/>
    <line x1="269" y1="100" x2="371" y2="65"/>
    <line x1="269" y1="135" x2="371" y2="65"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="40" y="162">x</text><text x="160" y="162">y</text>
    <text x="260" y="162">x</text><text x="380" y="162">y</text>
    <text x="100" y="12">∀x ∃y: each x has its own y</text>
    <text x="320" y="12">∃y ∀x: one y for every x</text>
  </g>
</svg>
</div>

In $\forall x\ \exists y$, the $y$ may **depend on** $x$: each $x$ gets its own. In $\exists y\ \forall x$, a single
$y$ must serve **every** $x$ at once. The second is the stronger claim; if it is true, so is the first, but not the
other way round. Swapping two $\forall$s, or two $\exists$s, never changes the meaning. Swapping a $\forall$ with an
$\exists$ usually does.

### Negating mechanically

To negate a statement, push the $\neg$ inwards one step at a time, using these rules:

| Negation of | is equivalent to |
| --- | --- |
| $\forall x\ P(x)$ | $\exists x\ \neg P(x)$ |
| $\exists x\ P(x)$ | $\forall x\ \neg P(x)$ |
| $p \land q$ | $\neg p \lor \neg q$ |
| $p \lor q$ | $\neg p \land \neg q$ |
| $p \to q$ | $p \land \neg q$ |
| $a > b$ | $a \le b$ |

The rule for $p \to q$ comes from its truth table: an "if" is false only when the first part is true and the
second false. With these, negation needs no cleverness: each quantifier flips, and the $\neg$ lands on the inside.

## Worked examples

**1. Negating the infinitude of primes.**

$$\neg\,\forall n\ \exists p\ \big(p > n \land \text{Prime}(p)\big)$$

Flip $\forall$: $\exists n\ \neg\,\exists p\ (\ldots)$. Flip $\exists$:
$\exists n\ \forall p\ \neg(p > n \land \text{Prime}(p))$. De Morgan:
$\exists n\ \forall p\ \big(p \le n \lor \neg\text{Prime}(p)\big)$.

In words: "there is a number $n$ such that every $p$ is either at most $n$ or not prime", that is, "there is a
number that no prime goes past". That is exactly "there are only finitely many primes", which Euclid proved false.

**2. Between any two reals there is a rational.** Translate and negate, with domain the real numbers and
$\mathbb{Q}$ the rationals.

$$\forall x\ \forall y\ \Big(x < y \to \exists q\ \big(q \in \mathbb{Q} \land x < q \land q < y\big)\Big).$$

Negation: $\exists x\ \exists y\ \Big(x < y \land \forall q\ \big(q \notin \mathbb{Q} \lor q \le x \lor q \ge y\big)\Big)$.
In words: "there are two numbers $x < y$ with no rational strictly between them". (The original is true; the
negation is false.)

**3. Bounded.** A function $f$ is **bounded** if some number $M$ is at least as large as every value $|f(x)|$:

$$\exists M\ \forall x\ \big(|f(x)| \le M\big).$$

Negation: $\forall M\ \exists x\ \big(|f(x)| > M\big)$: "however big a bound $M$ you choose, some value of $f$ goes
past it". For $f(x) = x^2$: given $M$, take $x = M + 1$ when $M \ge 0$; then $x^2 = M^2 + 2M + 1 > M$ (and if $M < 0$
any $x$ works). So $x^2$ is unbounded. Notice the proof of a "for all, exists" statement: **you are handed** $M$,
and **you choose** $x$, which may depend on $M$.

**4. Goldbach's conjecture in symbols.** "Every even number greater than 2 is the sum of two primes", domain the
positive integers:

$$\forall n\ \Big(\big(n > 2 \land \exists k\ (n = 2k)\big) \to \exists p\ \exists q\ \big(\text{Prime}(p) \land \text{Prime}(q) \land n = p + q\big)\Big).$$

Its negation is an $\exists n$ statement: "there is an even number greater than 2 that is not a sum of two primes".
So to **disprove** Goldbach, one counterexample would do. To prove it needs an argument nobody has found.

## Try it

1. With domain the integers, say whether each is true: (a) $\forall x\ \exists y\ (x + y = 0)$;
   (b) $\exists y\ \forall x\ (x + y = 0)$; (c) $\exists y\ \forall x\ (x + y = x)$.
2. Is (a) of question 1 true with domain the positive integers $1, 2, 3, \ldots$?
3. Translate, using $D(x)$ for "$x$ is a dog" and $B(x)$ for "$x$ barks": (a) "All dogs bark." (b) "Some dogs do not
   bark." (c) "No dog barks." Check that (b) is the negation of (a).
4. What does $\forall x\,(D(x) \land B(x))$ say? What does $\exists x\,(D(x) \to B(x))$ say, and why is it nearly
   useless?
5. Negate and simplify: $\forall \varepsilon\ \big(\varepsilon > 0 \to \exists N\ \forall n\ (n > N \to |a_n| < \varepsilon)\big)$.
6. Write in symbols, domain the real numbers: "$f$ is increasing" (whenever $x < y$, $f(x) < f(y)$). Then write its
   negation in words.
7. Harder. Write "there is **exactly one** $x$ with $P(x)$" in symbols, using $\exists$, $\forall$ and $=$.
8. Harder. Write "$n$ is a perfect square" and "$a$ divides $b$" in symbols, domain the integers, using only
   $\exists$, $\times$ and $=$.

??? note "Answers"
    1. (a) **True**: for each $x$, take $y = -x$. (b) **False**: one $y$ cannot make $x + y = 0$ for every $x$
       (for $x = 0$ it would have to be 0, and then $1 + 0 \ne 0$). (c) **True**: $y = 0$ works for every $x$.
    2. **False**: for $x = 1$ there is no positive $y$ with $1 + y = 0$. The domain matters.
    3. (a) $\forall x\,(D(x) \to B(x))$. (b) $\exists x\,(D(x) \land \neg B(x))$. (c) $\forall x\,(D(x) \to \neg B(x))$,
       or equally $\neg\exists x\,(D(x) \land B(x))$. Negating (a): $\exists x\,\neg(D(x) \to B(x))$, and
       $\neg(p \to q) \equiv p \land \neg q$, giving (b). ✓
    4. The first says everything in the domain is a barking dog. The second is true as soon as there is one thing
       that is not a dog (a cat makes $D \to B$ true), so it tells you nothing about dogs.
    5. $\exists \varepsilon\ \big(\varepsilon > 0 \land \forall N\ \exists n\ (n > N \land |a_n| \ge \varepsilon)\big)$:
       "there is a positive $\varepsilon$ such that, however far out you go, some later term has size at least
       $\varepsilon$". (The original says $a_n$ tends to 0; this is what "does not tend to 0" means.)
    6. $\forall x\ \forall y\ \big(x < y \to f(x) < f(y)\big)$. Negation: $\exists x\ \exists y\ \big(x < y \land f(x) \ge f(y)\big)$:
       "there are two inputs, the first smaller, where $f$ does not go up".
    7. $\exists x\ \big(P(x) \land \forall y\ (P(y) \to y = x)\big)$: some $x$ has the property, and anything with
       the property is that $x$.
    8. $n$ is a square: $\exists k\ (n = k \times k)$. $a$ divides $b$: $\exists k\ (b = a \times k)$.

## Common mistake

**"All" with "and", "some" with "if".** "All $A$ are $B$" uses $\to$ inside $\forall$; "some $A$ is $B$" uses
$\land$ inside $\exists$. Swapping them gives statements that are far too strong or far too weak.

**Negating only the end.** The negation of $\forall x\ \exists y\ P(x, y)$ is not $\forall x\ \exists y\ \neg P(x, y)$.
Every quantifier the $\neg$ passes through must flip: $\exists x\ \forall y\ \neg P(x, y)$.

## Where it leads

- Back: [Paradoxes](../level-7/06-paradoxes.md) (end of level 7) · Next: [Axioms](02-axioms.md).
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- The first look at quantifiers: [Quantifiers](../level-5/04-quantifiers.md). Proofs that use them:
  [Level 7](../level-7/index.md).
- The language of limits, written exactly this way: [Change](../../change/index.md).
- On the U of T shelf: quantifiers are the first unit of [MAT137](../../../uoft/MAT137/unit01.md) and of
  [MAT158](../../../uoft/MAT158H1/unit01.md), and nested quantifiers are the whole of the definition of a limit in
  [MAT137 Unit 2](../../../uoft/MAT137/unit02.md).
