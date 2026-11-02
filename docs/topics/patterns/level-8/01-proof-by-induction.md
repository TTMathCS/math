---
title: "Proof by induction"
---

# Proof by induction

*Patterns and sequences · level 8, lesson 1 of 6*

## A question to start

Add up the first few odd numbers:

$$1 = 1^2, \qquad 1 + 3 = 2^2, \qquad 1 + 3 + 5 = 3^2, \qquad 1 + 3 + 5 + 7 = 4^2.$$

A computer can check this for the first billion values of $n$ in a few seconds. Every one works. Is that a proof?

No. A billion is not "every". There are infinitely many whole numbers, and no amount of checking reaches them all.
Mathematics has been fooled before by patterns that held for a very long time and then broke (you will meet some in
[lesson 6](06-unsolved-patterns.md)). Yet we can be **completely certain** that the odd numbers always add to a
square, with a proof only a few lines long. This lesson shows how.

## The idea

### Statements about every $n$

Many facts in this topic are statements about a whole number $n$: "the sum of the first $n$ odd numbers is $n^2$",
"$7^n - 1$ is a multiple of 6", "$2^n > n^2$". Call such a statement $P(n)$. For each particular $n$, $P(n)$ is either
true or false. $P(3)$ says $1 + 3 + 5 = 9$, which is true. We want to prove $P(n)$ for **every** $n = 1, 2, 3, \ldots$

### The dominoes

Picture an endless row of dominoes standing on end, one for each whole number.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 170" role="img" aria-label="A row of dominoes: the first has fallen against the second, which is tipping into the third; the rest are still standing, close enough that each will knock over the next">
  <line x1="10" y1="150" x2="370" y2="150" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="40" y="70" width="14" height="80" fill="#eea66f" transform="rotate(52 54 150)"/>
    <rect x="90" y="70" width="14" height="80" fill="#eea66f" transform="rotate(18 104 150)"/>
    <rect x="140" y="70" width="14" height="80" fill="#9cc9ea"/>
    <rect x="190" y="70" width="14" height="80" fill="#9cc9ea"/>
    <rect x="240" y="70" width="14" height="80" fill="#9cc9ea"/>
    <rect x="290" y="70" width="14" height="80" fill="#9cc9ea"/>
  </g>
  <text x="335" y="115" font-size="20" fill="currentColor">…</text>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="47" y="166">1</text><text x="97" y="166">2</text><text x="147" y="166">3</text>
    <text x="197" y="166">4</text><text x="247" y="166">5</text><text x="297" y="166">6</text>
  </g>
  <text x="190" y="30" font-size="12" text-anchor="middle" fill="currentColor">the first falls, and each one knocks over the next</text>
</svg>
</div>

To be sure that **every** domino falls, you do not need to watch them all. Two facts are enough.

1. **The first domino falls.**
2. **Whenever a domino falls, it knocks over the next one.**

From fact 1, domino 1 falls. Fact 2 (with domino 1) gives domino 2. Fact 2 again gives domino 3, then 4, and so on.
There is no domino the chain fails to reach.

### The principle of mathematical induction

Translate dominoes into statements. To prove $P(n)$ for every whole number $n \ge 1$, prove two things.

1. **Base case**: $P(1)$ is true.
2. **Inductive step**: for every $m \ge 1$, **if** $P(m)$ is true, **then** $P(m + 1)$ is true.

The assumption "$P(m)$ is true" in the inductive step is called the **inductive hypothesis**. Notice what you are
proving in the step: not that $P(m)$ is true, but that **truth passes along**. That one "if ... then" argument, done
once for a general $m$, covers infinitely many links of the chain at once.

### Why induction is a valid proof

Here is a reason that does not lean on dominoes. Suppose both parts have been proved, but $P(n)$ is false for some
$n$. Among all the numbers where it is false, there is a **smallest** one; call it $s$. (Any non-empty collection of
positive whole numbers has a smallest member.)

- $s$ is not 1, because the base case says $P(1)$ is true. So $s \ge 2$, and $s - 1$ is a positive whole number.
- $s - 1$ is smaller than $s$, so $P(s - 1)$ is true ($s$ was the **first** failure).
- The inductive step, with $m = s - 1$, then says $P(s)$ is true. That contradicts $P(s)$ being false.

So there can be no failure at all: $P(n)$ is true for every $n$.

### A template

Write every induction proof in the same five parts. It keeps you honest.

1. **Statement.** Say exactly what $P(n)$ is.
2. **Base case.** Check $P(1)$ (or the first value).
3. **Inductive hypothesis.** "Assume $P(m)$ is true for some $m \ge 1$", and write out what that says.
4. **Inductive step.** Write out $P(m + 1)$ as the **goal**. Then start from one side of it, **use the hypothesis**,
   and reach the other side.
5. **Conclusion.** "By induction, $P(n)$ is true for every $n \ge 1$."

The key move in step 4 is almost always to find $P(m)$ **inside** $P(m + 1)$. For sums, the sum of the first $m + 1$
terms is the sum of the first $m$ terms plus one more.

### Both parts are needed

- **A step with no base.** Let $P(n)$ be "$n = n + 1$". If $m = m + 1$, then adding 1 to both sides gives
  $m + 1 = m + 2$, so the step works. But $P(1)$ says $1 = 2$. The dominoes are lined up perfectly, and none of them
  ever falls.
- **A base with no step.** Checking cases is a base with no step. It can go on for a very long time without proving
  anything (lesson 6).

## Worked examples

**1. The odd numbers make squares.** Prove that $1 + 3 + 5 + \cdots + (2n - 1) = n^2$ for every $n \ge 1$.

- **Statement.** $P(n)$: $\displaystyle\sum_{k=1}^{n} (2k - 1) = n^2$.
- **Base case.** $n = 1$: the left side is $1$, the right side is $1^2 = 1$. ✓
- **Hypothesis.** Assume $1 + 3 + \cdots + (2m - 1) = m^2$ for some $m \ge 1$.
- **Step.** Goal: $1 + 3 + \cdots + (2m - 1) + (2m + 1) = (m + 1)^2$. (The $(m + 1)$th odd number is
  $2(m + 1) - 1 = 2m + 1$.) Start from the left side and use the hypothesis on the first $m$ terms:

$$\underbrace{1 + 3 + \cdots + (2m - 1)}_{= \, m^2 \text{ by hypothesis}} + (2m + 1) = m^2 + 2m + 1 = (m + 1)^2.$$

- **Conclusion.** By induction, the formula holds for every $n \ge 1$. ∎

The algebra $m^2 + 2m + 1 = (m + 1)^2$ is the picture from [level 4](../level-4/index.md): an L-shaped border of
$2m + 1$ dots turns an $m \times m$ square into an $(m + 1) \times (m + 1)$ square.

**2. The sum of the first $n$ cubes.** Prove that $1^3 + 2^3 + \cdots + n^3 = \dfrac{n^2(n + 1)^2}{4}$ for every
$n \ge 1$.

- **Base case.** $n = 1$: left side $1$, right side $\frac{1 \times 4}{4} = 1$. ✓
- **Hypothesis.** Assume $1^3 + \cdots + m^3 = \frac{m^2(m + 1)^2}{4}$.
- **Step.** Goal: $1^3 + \cdots + m^3 + (m + 1)^3 = \frac{(m + 1)^2(m + 2)^2}{4}$. Using the hypothesis, the left side
  is

$$\frac{m^2(m + 1)^2}{4} + (m + 1)^3 = \frac{(m + 1)^2}{4}\bigl[m^2 + 4(m + 1)\bigr] = \frac{(m + 1)^2(m^2 + 4m + 4)}{4} = \frac{(m + 1)^2(m + 2)^2}{4}.$$

  The trick was to take out the common factor $(m + 1)^2$ early, rather than multiplying everything out.
- **Conclusion.** By induction it holds for every $n \ge 1$. ∎

In [level 7](../level-7/index.md) you saw a picture of why this is true; now you have a proof that does not depend on
seeing the picture.

**3. A geometric sum.** Prove that $1 + 2 + 4 + \cdots + 2^{n-1} = 2^n - 1$ for every $n \ge 1$.

- **Base case.** $n = 1$: left side $2^0 = 1$, right side $2^1 - 1 = 1$. ✓
- **Hypothesis.** Assume $1 + 2 + \cdots + 2^{m-1} = 2^m - 1$.
- **Step.** Goal: $1 + 2 + \cdots + 2^{m-1} + 2^m = 2^{m+1} - 1$. The left side is
  $(2^m - 1) + 2^m = 2 \cdot 2^m - 1 = 2^{m+1} - 1$. ✓
- **Conclusion.** True for every $n \ge 1$. ∎

**4. Starting somewhere else.** The base case does not have to be $n = 1$. To prove something for every $n \ge 0$,
check $n = 0$; to prove it for every $n \ge 5$, check $n = 5$ and prove the step for every $m \ge 5$. The dominoes
simply start further along the row. You will need this in the next lesson.

## Try it

1. Prove by induction that $2 + 4 + 6 + \cdots + 2n = n(n + 1)$.
2. Prove by induction that $\displaystyle\sum_{k=1}^{n} k(k + 1) = \frac{n(n + 1)(n + 2)}{3}$.
3. Prove by induction that $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k + 1)} = \frac{n}{n + 1}$.
4. Prove by induction that $1 + 3 + 9 + \cdots + 3^{n-1} = \dfrac{3^n - 1}{2}$.
5. Work out $\displaystyle\sum_{k=1}^{n} k \cdot k!$ for $n = 1, 2, 3, 4$, guess a formula, and prove it. (Here
   $k! = 1 \times 2 \times \cdots \times k$.)
6. "Proof" that $n^2 + n$ is always odd: if $m^2 + m$ is odd, then $(m + 1)^2 + (m + 1) = (m^2 + m) + 2(m + 1)$ is odd
   plus even, which is odd. What is wrong?
7. Prove that $F_1^2 + F_2^2 + \cdots + F_n^2 = F_nF_{n+1}$ for the Fibonacci numbers ($F_1 = F_2 = 1$).
8. Prove Cassini's identity $F_{n+1}F_{n-1} - F_n^2 = (-1)^n$ for every $n \ge 2$.

??? note "Answers"
    1. Base $n = 1$: $2 = 1 \times 2$. ✓ Step: assume $2 + \cdots + 2m = m(m + 1)$. Then
       $2 + \cdots + 2m + 2(m + 1) = m(m + 1) + 2(m + 1) = (m + 1)(m + 2)$, which is the formula for $m + 1$. ∎
    2. Base: $1 \times 2 = 2 = \frac{1 \times 2 \times 3}{3}$. ✓ Step: assume the sum to $m$ is $\frac{m(m+1)(m+2)}{3}$.
       Adding the next term $(m + 1)(m + 2)$ gives $\frac{m(m+1)(m+2)}{3} + \frac{3(m+1)(m+2)}{3} = \frac{(m+1)(m+2)(m+3)}{3}$,
       the formula for $m + 1$. ∎
    3. Base: $\frac{1}{2} = \frac{1}{1 + 1}$. ✓ Step: assume the sum to $m$ is $\frac{m}{m + 1}$. Adding
       $\frac{1}{(m + 1)(m + 2)}$ gives $\frac{m(m + 2) + 1}{(m + 1)(m + 2)} = \frac{(m + 1)^2}{(m + 1)(m + 2)} = \frac{m + 1}{m + 2}$. ∎
    4. Base: $1 = \frac{3 - 1}{2}$. ✓ Step: $\frac{3^m - 1}{2} + 3^m = \frac{3^m - 1 + 2 \cdot 3^m}{2} = \frac{3^{m+1} - 1}{2}$. ∎
    5. Sums: $1$, $1 + 4 = 5$, $5 + 18 = 23$, $23 + 96 = 119$. These are $2! - 1$, $3! - 1$, $4! - 1$, $5! - 1$, so
       guess $\sum_{k=1}^{n} k \cdot k! = (n + 1)! - 1$. Base: $1 = 2! - 1$. ✓ Step: $(m + 1)! - 1 + (m + 1)(m + 1)! = (m + 1)!\,(1 + m + 1) - 1 = (m + 2)! - 1$. ∎
    6. The step is correct, but **there is no base case**, and none can be found: $1^2 + 1 = 2$ is even. In fact
       $n^2 + n = n(n + 1)$ is a product of two neighbouring numbers, one of which is even, so it is **always even**.
       The dominoes are lined up, but the first never falls.
    7. Base: $F_1^2 = 1 = F_1F_2$. ✓ Step: assume $F_1^2 + \cdots + F_m^2 = F_mF_{m+1}$. Then adding $F_{m+1}^2$ gives
       $F_mF_{m+1} + F_{m+1}^2 = F_{m+1}(F_m + F_{m+1}) = F_{m+1}F_{m+2}$. ∎ (Picture: the Fibonacci squares of
       level 7 tile an $F_n \times F_{n+1}$ rectangle.)
    8. Base $n = 2$: $F_3F_1 - F_2^2 = 2 - 1 = 1 = (-1)^2$. ✓ Step: assume $F_{m+1}F_{m-1} - F_m^2 = (-1)^m$. Then,
       replacing $F_{m+2}$ by $F_{m+1} + F_m$ and one $F_{m+1}$ by $F_m + F_{m-1}$,
       $F_{m+2}F_m - F_{m+1}^2 = (F_{m+1} + F_m)F_m - F_{m+1}(F_m + F_{m-1}) = F_m^2 - F_{m+1}F_{m-1} = -(-1)^m = (-1)^{m+1}$. ∎

## Common mistake

**Assuming what you want to prove.** The inductive step assumes $P(m)$ and must **reach** $P(m + 1)$. Writing
$P(m + 1)$ down at the start and "simplifying both sides until they match" is risky; working from one side to the
other is safe.

**Not using the hypothesis.** If your inductive step never uses $P(m)$, something is wrong: either the statement was
easy enough to prove directly, or (much more likely) there is a mistake.

## Where it leads

- Back: [Level 7: sequences as functions](../level-7/06-sequences-functions.md) · Next: [More induction](02-more-induction.md).
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- The formulas proved here were found in [level 7](../level-7/index.md). The logic of "if ... then" and of proof by
  contradiction: [Logic](../../logic/index.md).
- Induction is taught carefully in first-year university: [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
