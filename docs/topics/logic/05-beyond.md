---
title: "Beyond: How a proof works"
---

# Beyond: How a proof works

*Logic and puzzles · step 5 of 5*

## A question to start

Work out $n^2 - n + 41$ for $n = 1, 2, 3, \ldots$

$$41, \quad 43, \quad 47, \quad 53, \quad 61, \quad 71, \quad 83, \quad 97, \quad \ldots$$

Every one is a **prime number** (a whole number above 1 whose only factors are 1 and itself). In fact it keeps
giving primes all the way to $n = 40$. Forty examples in a row. Is it always prime?

No. At $n = 41$ it gives $41^2 - 41 + 41 = 41^2 = 1681$, which is $41 \times 41$. This formula was studied by
Leonhard Euler in the 1700s. It is the perfect warning: **examples are not a proof**. A proof is an argument that
covers every case at once, with no gaps. This page shows how such arguments are built.

## The idea

### What a proof is

A **theorem** is a statement that has been proved. A **proof** is a chain of steps, each one following from
definitions, from facts already proved, or from the steps before it by the rules of logic, ending at the
statement you wanted.

Proofs start from **definitions**, so they must be exact. Here are the ones used on this page.

- A whole number $n$ is **even** if $n = 2k$ for some whole number $k$.
- It is **odd** if $n = 2k + 1$ for some whole number $k$. Every whole number is exactly one of these.
- A number is **rational** if it can be written as a fraction $\dfrac{a}{b}$ of whole numbers, with $b \ne 0$.
  Otherwise it is **irrational**.

Most theorems have the shape *if $p$ then $q$*, often with a hidden "for all": *for every whole number $n$, if
$n$ is ..., then ...*. There are a few standard ways to prove such a statement.

### 1. Direct proof

Assume $p$. Use definitions and algebra to reach $q$.

**Theorem.** The sum of two odd numbers is even.

**Proof.** Let the odd numbers be $m = 2a + 1$ and $n = 2b + 1$, where $a$ and $b$ are whole numbers. Then

$$m + n = 2a + 2b + 2 = 2(a + b + 1).$$

Since $a + b + 1$ is a whole number, $m + n$ is 2 times a whole number, so it is even. ∎

The ∎ (a filled square) marks the end of a proof. Notice we used two **different** letters, $a$ and $b$. Using
$2k + 1$ for both would quietly assume the two odd numbers are the same.

### 2. Proof by contrapositive

From the Build step: $p \to q$ is equivalent to $\neg q \to \neg p$. Sometimes the second is much easier to prove.

**Theorem.** For a whole number $n$, if $n^2$ is even, then $n$ is even.

Starting from "$n^2$ is even" gives us $n^2 = 2k$, and there is no easy way to get to $n$ from there. So prove the
contrapositive instead: *if $n$ is odd, then $n^2$ is odd.*

**Proof.** Suppose $n$ is odd, so $n = 2k + 1$. Then $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd. So the
contrapositive is true, and therefore so is the theorem. ∎

### 3. Proof by contradiction

Suppose the statement is **false**. Follow the logic until you reach something impossible, a **contradiction**.
Then the statement cannot be false, so it is true. This is the knights and knaves method: a case that leads to
something impossible is crossed off.

### 4. Counterexample

To show that a "for all" statement is **false**, one example where it fails is enough. That example is a
**counterexample**. The number $n = 41$ above is a counterexample to "$n^2 - n + 41$ is always prime". One
counterexample beats a million examples.

### 5. Proof by cases, and by induction

Sometimes you split into cases (say, $n$ even and $n$ odd) and prove each one. And for statements about every
whole number, there is **induction**, the domino method, explained on the
[Beyond step of Patterns and sequences](../patterns/05-beyond.md).

## Worked examples

**1. $\sqrt{2}$ is irrational.** This proof is more than 2000 years old and is one of the most famous in
mathematics.

*Suppose, for a contradiction,* that $\sqrt2$ is rational. Then $\sqrt2 = \dfrac{a}{b}$ for whole numbers $a$ and
$b$, and we can choose the fraction in **lowest terms**, so $a$ and $b$ have no common factor other than 1.

1. Square both sides: $2 = \dfrac{a^2}{b^2}$, so $a^2 = 2b^2$.
2. So $a^2$ is even. By the contrapositive theorem above, $a$ is even. Write $a = 2c$.
3. Then $4c^2 = 2b^2$, so $b^2 = 2c^2$. So $b^2$ is even, and so $b$ is even.
4. Now $a$ and $b$ are both even, so they have the common factor 2. But we chose them in lowest terms. That is a
   **contradiction**.

So the supposition was false, and $\sqrt2$ is irrational. ∎

Look how the pieces fit: a definition (rational), a theorem proved earlier (by contrapositive), and a contradiction
at the end.

**2. There are infinitely many primes.** This proof is found in Euclid's *Elements*, written around 300 BC.

*Suppose, for a contradiction,* that there are only finitely many primes, and list them all:
$p_1, p_2, \ldots, p_k$. Make the number

$$N = p_1 \times p_2 \times \cdots \times p_k + 1.$$

$N$ is bigger than 1, so it has at least one prime factor. But dividing $N$ by any prime on the list leaves
remainder 1, so none of them divides $N$. So $N$ has a prime factor that is not on the list, and the list was not
complete. Contradiction. So there are infinitely many primes. ∎

(Careful: the proof does **not** say $N$ itself is always prime. Try it with the first six primes:
$2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031 = 59 \times 509$, not prime.
The proof says only that $N$ has a prime factor missing from the list.)

## Try it

1. Prove directly that the sum of two even numbers is even.
2. Prove that the product of two odd numbers is odd.
3. Find a counterexample to each: "Every odd number is prime." "$n^2 + n + 1$ is prime for every whole number
   $n \ge 1$."
4. Prove by contrapositive: for a whole number $n$, if $3n + 1$ is even, then $n$ is odd.
5. Prove by cases that $n(n + 1)$ is even for every whole number $n$.
6. Find the mistake. *Let $a = b$. Then $a^2 = ab$, so $a^2 - b^2 = ab - b^2$, so $(a + b)(a - b) = b(a - b)$. Divide
   by $(a - b)$: $a + b = b$. Since $a = b$, this says $2b = b$, so $2 = 1$.*

??? note "Answers"
    1. Let $m = 2a$ and $n = 2b$. Then $m + n = 2(a + b)$, which is 2 times a whole number, so it is even. ∎
    2. Let $m = 2a + 1$ and $n = 2b + 1$. Then $mn = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, which is odd. ∎
    3. 9 is odd and $9 = 3 \times 3$, so it is not prime (1 is another counterexample, since 1 is not prime). For
       the second: $n = 4$ gives $16 + 4 + 1 = 21 = 3 \times 7$. (The first three values, 3, 7 and 13, are prime,
       which is what makes the claim look believable.)
    4. Contrapositive: if $n$ is even, then $3n + 1$ is odd. Let $n = 2k$. Then $3n + 1 = 6k + 1 = 2(3k) + 1$, which
       is odd. ∎
    5. *Case $n$ even*, $n = 2k$: $n(n+1) = 2k(n+1)$, which is even. *Case $n$ odd*, $n = 2k+1$: then $n + 1 = 2k + 2 = 2(k+1)$,
       so $n(n+1) = 2n(k+1)$, which is even. Every whole number is in one of the cases. ∎
    6. Since $a = b$, the number $a - b$ is **0**, and dividing by 0 is not allowed. The step "divide by $(a - b)$"
       is where the proof breaks. Every step of a proof must be allowed, not just most of them.

## Common mistake

**Proving the converse, or proving with examples.** "I checked $n = 1$ to $10$ and it works" is evidence, not a
proof. And when asked to prove $p \to q$, starting from $q$ and arriving at $p$ proves the converse, which is a
different statement. Before you begin, write down clearly what you may **assume** and what you must **reach**.

## Where it leads

- Back a step: [Master: sets and "for all, there exists"](04-master.md)
- Proof by induction is on the [Beyond step of Patterns and sequences](../patterns/05-beyond.md). Proofs about
  primes fill [Number theory](../number-theory/index.md), and the strangest proofs of all, about the sizes of
  infinity, are in [Infinity and strange math](../infinity/index.md).
- On the U of T shelf, logic and proof open both first-year calculus courses:
  [MAT137 Unit 1: logic, sets and proofs](../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1: logic, sets and proof](../../uoft/MAT158H1/unit01.md).
- The other topics: [all topics](../index.md).
