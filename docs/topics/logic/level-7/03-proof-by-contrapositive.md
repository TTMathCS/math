---
title: "Proof by contrapositive"
---

# Proof by contrapositive

*Logic and puzzles · level 7, lesson 3 of 6*

## A question to start

Here is a fact you will need for one of the most famous proofs in mathematics (the next lesson):

> **If $n^2$ is even, then $n$ is even.**

Try to prove it directly. Assume $n^2$ is even, so $n^2 = 2k$ for some integer $k$. Now what? You want something
about $n$, so take a square root: $n = \sqrt{2k}$. That tells you nothing about whether $n$ is even. The direct road
is blocked.

There is a side door. Instead of the statement itself, prove a different statement that is **logically the same**
and much easier. It takes three lines.

## The idea

### The contrapositive means the same thing

In [Converse, inverse and contrapositive](../level-4/04-converse-contrapositive.md) you met four statements made
from "if $p$ then $q$":

| Name | Statement | Same meaning as $p \to q$? |
| --- | --- | --- |
| original | $p \to q$ | yes |
| converse | $q \to p$ | not always |
| inverse | $\neg p \to \neg q$ | not always |
| contrapositive | $\neg q \to \neg p$ | **always** |

The truth table shows $p \to q$ and $\neg q \to \neg p$ are false in exactly the same row (when $p$ is true and $q$
is false), so they are true in exactly the same cases. Here is the same fact as a picture. "If $p$ then $q$" says
that everything with property $p$ sits inside the region with property $q$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="A small circle P inside a larger circle Q; a point outside Q is also outside P">
  <rect x="10" y="10" width="360" height="170" rx="8" fill="none" stroke="currentColor"/>
  <circle cx="160" cy="95" r="75" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <circle cx="145" cy="105" r="35" fill="#eea66f" stroke="currentColor"/>
  <circle cx="310" cy="60" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="145" y="110">p</text>
    <text x="195" y="55">q</text>
    <text x="310" y="88" font-size="12">not q,</text>
    <text x="310" y="103" font-size="12">so not p</text>
  </g>
</svg>
</div>

If a thing is **outside** the $q$ region, it cannot be inside the $p$ region, because the $p$ region lies entirely
inside $q$. That is "if not $q$, then not $p$". The two sentences describe the same picture.

So to prove $p \to q$, it is enough to prove $\neg q \to \neg p$. This is called **proof by contrapositive**. The
proof itself is a direct proof, just of the turned-around statement.

### The famous one

**Theorem.** Let $n$ be an integer. If $n^2$ is even, then $n$ is even.

**Proof.** We prove the contrapositive: if $n$ is not even, then $n^2$ is not even. An integer that is not even is
odd, so suppose $n$ is odd, $n = 2k + 1$ for an integer $k$. Then

$$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1,$$

which is odd, so not even. This proves the contrapositive, and so the theorem. ∎

Why did this work so easily? In the original, the hypothesis is about $n^2$ and the conclusion about $n$; going
from a square back to its root is hard. In the contrapositive the hypothesis is about $n$ and the conclusion about
$n^2$; going from a number to its square is just algebra.

### Negating correctly

The contrapositive needs the **negations** of $p$ and $q$, and these must be exact.

- For integers, "not even" is "odd", and "not odd" is "even" (every integer is exactly one of the two).
- "Not divisible by 3" is not a single formula. It means $n = 3k + 1$ **or** $n = 3k + 2$ for some integer $k$
  (remainder 1 or remainder 2). So the proof will need two cases.
- "Not ($a \ge 10$ or $b \ge 10$)" is "$a < 10$ **and** $b < 10$", by [De Morgan's laws](../level-5/03-de-morgan.md).
- "Not ($x$ is rational and $y$ is rational)" is "$x$ is irrational **or** $y$ is irrational".
- For real numbers, "not $x > 5$" is "$x \le 5$", not "$x < 5$".

### When to choose it

A direct proof is the first thing to try. Reach for the contrapositive when:

- the **conclusion is a "not" or an "or"** statement ("$x$ is irrational", "$a$ or $b$ is large"). Negated, it
  becomes something positive you can calculate with ("$x = \frac{a}{b}$", "$a$ and $b$ are both small");
- the **hypothesis is about a complicated thing** ($n^2$, $xy$, $a + b$) and the conclusion about simpler parts
  ($n$, $x$ or $y$, $a$ or $b$). The contrapositive lets you build up instead of breaking down;
- the hypothesis gives you **nothing to substitute**. "$n^2$ is even" gave us $n^2 = 2k$, which is useless. "$n$ is
  odd" gave us $n = 2k + 1$, which we could square.

### The trap: the converse

The **converse** of "if $n^2$ is even then $n$ is even" is "if $n$ is even then $n^2$ is even". That is a different
statement (true here, but proved separately). Proving the converse instead of the contrapositive is one of the most
common mistakes in all of mathematics. Check: in the contrapositive, **both** parts are negated **and** swapped.

## Worked examples

**1. Divisible by 3.** Prove: if $n^2$ is divisible by 3, then $n$ is divisible by 3.

**Proof.** Contrapositive: if $n$ is not divisible by 3, then $n^2$ is not divisible by 3. If $n$ is not divisible
by 3, its remainder on division by 3 is 1 or 2.

- If $n = 3k + 1$, then $n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$, remainder 1.
- If $n = 3k + 2$, then $n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$, remainder 1.

Either way $n^2$ leaves remainder 1, so it is not divisible by 3. ∎ (A side fact: every square leaves remainder 0 or
1 on division by 3, never 2.)

**2. A sum and its parts.** Prove: for real numbers $a$ and $b$, if $a + b \ge 20$, then $a \ge 10$ or $b \ge 10$.

**Proof.** Contrapositive: if $a < 10$ and $b < 10$, then $a + b < 20$. Adding the two inequalities,
$a + b < 10 + 10 = 20$. ∎

The original would have meant guessing which of $a$ and $b$ is the big one. The contrapositive needed one line.
This is the idea behind the [pigeonhole principle](../../counting/level-4/06-pigeonhole-principle.md): if 10
pigeons go into 9 holes, some hole holds at least 2, because if every hole held at most 1, there would be at most
9 pigeons.

**3. Rational and irrational.** Prove: for real numbers $x$ and $y$, if $xy$ is irrational, then $x$ is irrational or
$y$ is irrational.

**Proof.** Contrapositive: if $x$ and $y$ are both rational, then $xy$ is rational. Write $x = \frac{a}{b}$ and
$y = \frac{c}{d}$ with integers $a, b, c, d$ and $b, d \ne 0$. Then $xy = \frac{ac}{bd}$. Here $ac$ and $bd$ are
integers and $bd \ne 0$, so $xy$ is rational. ∎

(The converse is false: $\sqrt2$ is irrational, yet $\sqrt2 \times \sqrt2 = 2$ is rational. Another reason never to
confuse the converse with the contrapositive.)

**4. A linear expression.** Prove: for an integer $n$, if $3n + 2$ is odd, then $n$ is odd.

**Proof.** Contrapositive: if $n$ is even, then $3n + 2$ is even. Let $n = 2k$. Then $3n + 2 = 6k + 2 = 2(3k + 1)$,
which is even. ∎

Could you do this one directly? Yes, but it is clumsier: from $3n + 2 = 2k + 1$ you get $3n = 2k - 1$, and you still
have to explain why that forces $n$ to be odd. The contrapositive turned a "work backwards" problem into a "work
forwards" one.

## Try it

1. Write the contrapositive of each, then say whether the original is true: (a) "If a quadrilateral is a square,
   then it has four right angles." (b) "If $x > 3$, then $x^2 > 9$." (c) "If it is a Sunday, the library is closed."
2. Prove by contrapositive: if $n^2$ is odd, then $n$ is odd.
3. Prove: for an integer $x$, if $x^2 - 6x + 5$ is even, then $x$ is odd.
4. Prove: for integers $a$ and $b$, if $ab$ is even, then $a$ is even or $b$ is even.
5. Prove: for real numbers $x$ and $y$, if $x + y$ is irrational, then $x$ is irrational or $y$ is irrational.
6. Prove: if $n^2$ is not divisible by 4, then $n$ is odd.
7. A student "proves" *if $n^2$ is even then $n$ is even* like this: "Let $n = 2k$. Then $n^2 = 4k^2 = 2(2k^2)$,
   which is even." What did the student actually prove?
8. Harder. Prove: if $n^2$ is divisible by 5, then $n$ is divisible by 5. (You will need four cases.)

??? note "Answers"
    1. (a) "If a quadrilateral does not have four right angles, then it is not a square." True. (b) "If
       $x^2 \le 9$, then $x \le 3$." True (if $x > 3$ then $x^2 > 9$ because both sides are positive). (c) "If the
       library is open, it is not a Sunday." Its truth depends on the library; the point is that the original and
       its contrapositive are true or false **together**.
    2. Contrapositive: if $n$ is even then $n^2$ is even. Let $n = 2k$; then $n^2 = 4k^2 = 2(2k^2)$, even. ∎
    3. Contrapositive: if $x$ is even then $x^2 - 6x + 5$ is odd. Let $x = 2k$. Then
       $x^2 - 6x + 5 = 4k^2 - 12k + 5 = 2(2k^2 - 6k + 2) + 1$, odd. ∎
    4. Contrapositive (with De Morgan): if $a$ is odd **and** $b$ is odd, then $ab$ is odd. That is the theorem
       "odd times odd is odd" from the last lesson. ∎
    5. Contrapositive: if $x$ and $y$ are both rational, then $x + y$ is rational. With $x = \frac{a}{b}$ and
       $y = \frac{c}{d}$: $x + y = \frac{ad + bc}{bd}$, a ratio of integers with $bd \ne 0$. ∎
    6. Contrapositive: if $n$ is even, then $n^2$ is divisible by 4. With $n = 2k$, $n^2 = 4k^2$. ∎
    7. The **converse**: "if $n$ is even, then $n^2$ is even". It is true, but it is not the statement asked for.
    8. Contrapositive: if $5 \nmid n$ then $5 \nmid n^2$. Write $n = 5k + r$ with $r = 1, 2, 3$ or $4$. Then
       $n^2 = 25k^2 + 10kr + r^2 = 5(5k^2 + 2kr) + r^2$, so $n^2$ leaves the same remainder as $r^2$, which is
       1, 4, 9 or 16, leaving remainders 1, 4, 4, 1 when divided by 5. None is 0, so $5 \nmid n^2$. ∎

## Common mistake

**Proving the converse.** Swapping without negating ($q \to p$) is the converse, a different statement. The
contrapositive does **both**: swap and negate.

**Negating badly.** The negation of "$a \ge 10$ or $b \ge 10$" is "$a < 10$ **and** $b < 10$". Writing "$a < 10$ or
$b < 10$" gives a different, weaker statement and the proof falls apart. Use De Morgan's laws.

## Where it leads

- Back: [Direct proof](02-direct-proof.md) · Next: [Proof by contradiction](04-proof-by-contradiction.md), where
  today's theorem proves that $\sqrt2$ is irrational.
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- Remainders, which made worked example 1 and question 8 work: [Remainders](../../number-theory/level-5/01-remainders.md).
- The pigeonhole principle, a contrapositive in disguise: [Counting](../../counting/level-4/06-pigeonhole-principle.md).
- On the U of T shelf: [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
