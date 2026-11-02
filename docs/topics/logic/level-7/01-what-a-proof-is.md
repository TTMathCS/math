---
title: "What a proof is"
---

# What a proof is

*Logic and puzzles · level 7, lesson 1 of 6*

## A question to start

Put some dots on a circle and join every pair of dots with a straight line. Count the pieces the circle is cut into
(choose the dots so that no three lines cross at one point, to get the most pieces).

| Dots | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Pieces | 1 | 2 | 4 | 8 | 16 |

The pattern is obvious: the number doubles each time. With 6 dots there must be 32 pieces.

Draw it carefully and count. There are **31**. With 7 dots there are 57, not 64. The doubling pattern was never the
real rule; it only looked like it for five steps. (The true rule is in [Patterns that trick you](../../patterns/level-3/06-patterns-that-trick.md).)

So how can anyone ever be **sure** that a pattern goes on for ever? Not by checking more cases. By a **proof**. This
lesson says what a proof is, what it is built from, and why it is different from every other kind of evidence.

## The idea

### Evidence is not proof

In science, a rule is trusted when many careful experiments agree with it, and it can be thrown out when a new
experiment disagrees. Mathematics asks for more. A mathematical statement such as "the sum of two odd numbers is
even" is about **every** odd number, and there are infinitely many of them. No list of checks, however long, covers
them all.

Some famous patterns held for an enormous number of cases and still failed:

- **The circle pieces** above fail at the sixth case.
- **$n^2 + n + 41$** is a prime number for $n = 0, 1, 2, \ldots, 39$: forty primes in a row. At $n = 40$ it is
  $1681 = 41 \times 41$ (lesson 5 shows why).
- **The Pólya conjecture**, a claim about how numbers split into prime factors, was widely believed for almost forty
  years. It was shown false in 1958, and the first number where it fails, found in 1980, is 906 150 257.

And some patterns have been checked enormously far and are still **not** known. Goldbach's conjecture, "every even
number greater than 2 is the sum of two primes" ($10 = 3 + 7$, $28 = 5 + 23$), has been checked by computer for
every even number up to 4 000 000 000 000 000 000. Nobody has proved it, so it is still called a **conjecture**: a
statement we believe but have not proved.

### What a proof is

A **proof** is a chain of statements, each one either

- a **definition** (what a word means exactly),
- an **axiom** (a starting fact we agree to accept without proof),
- a **theorem** already proved, or
- a statement that follows from earlier ones in the chain by a **valid** rule of logic (such as modus ponens,
  from [Valid arguments](../level-5/05-valid-arguments.md)),

that ends with the statement we wanted. If every link is sound, the last statement **must** be true, for every case
the statement talks about, not only the ones anyone has tried.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 190" role="img" aria-label="A proof as a building: axioms and definitions at the bottom, a lemma and a theorem built on them, and a corollary on top, joined by arrows">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="140" width="120" height="36" rx="6" fill="#9cc9ea"/>
    <rect x="160" y="140" width="120" height="36" rx="6" fill="#9cc9ea"/>
    <rect x="300" y="140" width="120" height="36" rx="6" fill="#9cc9ea"/>
    <rect x="80" y="76" width="120" height="36" rx="6" fill="#7ccf9a"/>
    <rect x="240" y="76" width="120" height="36" rx="6" fill="#7ccf9a"/>
    <rect x="160" y="12" width="120" height="36" rx="6" fill="#eea66f"/>
    <line x1="80" y1="140" x2="120" y2="112"/>
    <line x1="220" y1="140" x2="160" y2="112"/>
    <line x1="220" y1="140" x2="280" y2="112"/>
    <line x1="360" y1="140" x2="320" y2="112"/>
    <line x1="140" y1="76" x2="200" y2="48"/>
    <line x1="300" y1="76" x2="240" y2="48"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="80" y="163">axiom</text>
    <text x="220" y="163">definition</text>
    <text x="360" y="163">axiom</text>
    <text x="140" y="99">lemma</text>
    <text x="300" y="99">theorem</text>
    <text x="220" y="35">corollary</text>
  </g>
</svg>
</div>

### The words around a proof

- A **theorem** is a statement that has been proved, usually an important one.
- A **lemma** is a smaller theorem proved mainly as a step towards a bigger one.
- A **corollary** is a theorem that follows quickly from another theorem.
- A **conjecture** is a statement believed to be true but not yet proved (or disproved).
- The **hypothesis** of "if $p$ then $q$" is $p$, what you may assume; the **conclusion** is $q$, what you must
  reach.

### Definitions must be exact

A proof can only use what a word **means**, so the meaning has to be exact. Here are the definitions this level
uses again and again. Throughout, "integer" means a whole number: $\ldots, -2, -1, 0, 1, 2, \ldots$

- An integer $n$ is **even** if $n = 2k$ for some integer $k$.
- An integer $n$ is **odd** if $n = 2k + 1$ for some integer $k$.
- An integer $a$ **divides** an integer $b$, written $a \mid b$, if $b = ak$ for some integer $k$. So $3 \mid 12$
  because $12 = 3 \times 4$.
- An integer $p$ is **prime** if $p > 1$ and its only positive divisors are 1 and $p$.

Notice what "even" does **not** say. It does not say "ends in 0, 2, 4, 6 or 8". That is a true fact about even
numbers, but it is a theorem (it needs a reason), not the definition. A good definition is short and is easy to use
in algebra: "$n = 2k$" is something you can substitute and calculate with.

Why is 1 not prime? Not because someone forgot. The definition says $p > 1$ on purpose, so that every whole number
above 1 splits into primes in **only one way** ($12 = 2 \times 2 \times 3$, and no other list of primes works). If
1 counted, $12 = 1 \times 2 \times 2 \times 3$ would be a second way. Definitions are chosen to make the theorems
come out clean. (See [Unique factorisation](../../number-theory/level-6/06-unique-factorisation.md).)

### Axioms: where the chain starts

Every proof uses earlier facts, and those were proved from earlier facts still. The chain cannot go back for ever,
so it must start somewhere: with **axioms**, statements accepted without proof because they are simple and everyone
agrees on them. Euclid's geometry starts from five postulates, such as "a straight line can be drawn between any two
points". For numbers we use rules such as $a + b = b + a$ and $a(b + c) = ab + ac$, and the fact that adding or
multiplying two integers gives an integer. In this level we use the ordinary rules of algebra freely. Level 8 looks
at axioms themselves, and at what happens when one is changed.

### When checking IS a proof

There is one case where checking examples is a complete proof: when the statement is about **finitely many** things
and you check **all** of them. "Every whole number from 1 to 10 is a sum of at most four squares" can be proved by
writing out ten sums. Checking fails as a proof only when some cases are left unchecked, and with infinitely many
cases, some always are. (The [four colour theorem](../level-6/06-graph-colouring.md) was proved in 1976 by reducing infinitely
many maps to a finite list of cases, then having a computer check them all.)

## Worked examples

**1. Hypothesis and conclusion.** "If a whole number ends in 0, then it is divisible by 5." Name the hypothesis and
the conclusion, and say what a proof must do.

- Hypothesis: the number ends in 0. Conclusion: the number is divisible by 5.
- A proof must start from **any** number ending in 0 (not 10 or 70, but a general one) and reach divisibility by 5.
- Proof: a number ending in 0 is 10 times the number formed by its other digits, $n = 10m$. Then $n = 5(2m)$, and
  $2m$ is an integer, so $5 \mid n$ by the definition of divides. ∎

The ∎ marks the end of a proof.

**2. A first proof about every number.** Prove that the sum of any three consecutive integers is divisible by 3.

*Checking* $1 + 2 + 3 = 6$, $4 + 5 + 6 = 15$, $10 + 11 + 12 = 33$ suggests it. Now a proof.

**Proof.** Let the three consecutive integers be $n$, $n + 1$ and $n + 2$, where $n$ is any integer. Their sum is

$$n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1).$$

Since $n + 1$ is an integer, the sum is 3 times an integer, so 3 divides it. ∎

The letter $n$ did the work. Because $n$ stands for **any** integer, the one calculation covers every case at once.
That is the whole trick of algebraic proof. The proof even tells you more than you asked: the sum is 3 times the
**middle** number.

**3. A finite check.** Is it true that every integer from 1 to 10 is a sum of at most **three** perfect squares
(such as $1, 4, 9$)? Check every case.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| as squares | $1$ | $1+1$ | $1+1+1$ | $4$ | $4+1$ | $4+1+1$ | ? | $4+4$ | $9$ | $9+1$ |

Seven fails. The only squares below 7 are 1 and 4. With at most three of them the possible sums are 1, 2, 3, 4, 5,
6, 8, 9 and 12 (try them), and 7 is not among them: $7 = 4 + 1 + 1 + 1$ needs four. So the statement
is **false**, and 7 is a counterexample. A finite check can prove a statement, and it can just as well break one.
(Every whole number is a sum of four squares: Lagrange proved that in 1770.)

**4. Where is the gap?** A student writes: "To prove $n^2 \ge n$ for every integer $n$: $1^2 = 1 \ge 1$,
$2^2 = 4 \ge 2$, $3^2 = 9 \ge 3$, and it keeps getting bigger, so it is always true."

Two gaps. First, examples are not a proof. Second, the student forgot $0$ and the negative integers (here the claim
is still true, since $0^2 = 0$ and a negative $n$ gives $n^2 > 0 > n$, but the student did not show it). A proof
for $n \ge 1$: multiply both sides of $n \ge 1$ by the positive number $n$ to get $n^2 \ge n$. ∎ Every case needs a
reason, and the reason must be stated.

## Try it

1. For each, name the hypothesis and the conclusion: (a) "If two angles are vertically opposite, they are equal."
   (b) "A square number is never 2 more than a multiple of 3." (Rewrite it as "if ... then" first.)
2. Use the definition to show that $-6$ and $0$ are even and that $-3$ is odd.
3. Prove that the sum of any five consecutive integers is divisible by 5.
4. Is the sum of any **four** consecutive integers divisible by 4? Prove it or give a counterexample.
5. Explain why "I checked it for the first million numbers" is not a proof that a statement holds for every whole
   number, but "I checked all 100 numbers from 1 to 100" can be a proof that a statement holds for those 100.
6. The statement "every prime is odd" is false. Which single number shows it? What word is used for that number?
7. Harder. Prove that the product of any two consecutive integers, plus the larger of them, is a perfect square.
   (Try $3 \times 4 + 4 = 16$ first.)

??? note "Answers"
    1. (a) Hypothesis: two angles are vertically opposite. Conclusion: they are equal. (b) "If $n$ is a square
       number, then $n$ is not 2 more than a multiple of 3." Hypothesis: $n$ is a square. Conclusion: $n$ is not of
       the form $3k + 2$.
    2. $-6 = 2 \times (-3)$ and $0 = 2 \times 0$, both of the form $2k$ with $k$ an integer, so both are even.
       $-3 = 2 \times (-2) + 1$, of the form $2k + 1$ with $k = -2$, so it is odd.
    3. Let them be $n, n+1, n+2, n+3, n+4$. The sum is $5n + 10 = 5(n + 2)$, which is 5 times an integer. ∎
    4. **No.** $1 + 2 + 3 + 4 = 10$, which is not divisible by 4. In general $n + (n+1) + (n+2) + (n+3) = 4n + 6$,
       which always leaves remainder 2 when divided by 4, so in fact it is **never** divisible by 4.
    5. A million is not every number: the statement could fail at the million-and-first (like $n^2 + n + 41$ at
       $n = 40$). But "for each number from 1 to 100" has only 100 cases, so checking all of them leaves nothing out.
    6. The number **2**: it is prime and even. It is a **counterexample**.
    7. Let the integers be $n$ and $n + 1$. Then $n(n+1) + (n+1) = (n+1)(n + 1) = (n+1)^2$, a perfect square. ∎
       (Check: $3 \times 4 + 4 = 16 = 4^2$.)

## Common mistake

**Using one example as if it were the general case.** Writing "let the odd numbers be 3 and 5" and showing
$3 + 5 = 8$ is even proves nothing about 7 and 11. A proof uses letters that stand for **any** number of the right
kind.

**Assuming what you want to prove.** Starting with the conclusion, doing algebra, and arriving at something true
(like $0 = 0$) does not prove the conclusion. Read every step forwards: each must follow from what came before.

## Where it leads

- Next: [Direct proof](02-direct-proof.md), the most common way to build the chain.
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- The rules of logic a proof is allowed to use: [Valid arguments](../level-5/05-valid-arguments.md) and
  [Fallacies](../level-5/06-fallacies.md).
- Proof in geometry, with two-column proofs: [How to write a geometric proof](../../geometry/level-8/01-geometric-proof.md).
  Proof for every whole number at once: [Proof by induction](../../patterns/level-8/01-proof-by-induction.md).
- Goldbach and other famous unproved statements: [Famous open problems](../../number-theory/level-8/05-open-problems.md).
- On the U of T shelf: [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1: logic, sets and proof](../../../uoft/MAT158H1/unit01.md).
