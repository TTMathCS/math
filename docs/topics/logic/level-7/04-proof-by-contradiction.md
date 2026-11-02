---
title: "Proof by contradiction"
---

# Proof by contradiction

*Logic and puzzles · level 7, lesson 4 of 6*

## A question to start

Look for a fraction whose square is exactly 2. Here are some good tries:

| Fraction | Its square | As a decimal |
| --- | --- | --- |
| $\frac{7}{5}$ | $\frac{49}{25}$ | 1.96 |
| $\frac{17}{12}$ | $\frac{289}{144}$ | 2.00694... |
| $\frac{41}{29}$ | $\frac{1681}{841}$ | 1.99881... |
| $\frac{99}{70}$ | $\frac{9801}{4900}$ | 2.000204... |
| $\frac{239}{169}$ | $\frac{57121}{28561}$ | 1.999965... |

They get closer and closer to 2: each top is just 1 more or 1 less than twice the bottom. But none hits 2
exactly. Will a better fraction, with a bottom of a billion, finally do it?

No, and we can be sure without trying a single further fraction. The proof is more than two thousand years old. It
works by **pretending** that such a fraction exists and showing that the pretence falls apart.

## The idea

### The method

To prove a statement $S$ by **contradiction**:

1. **Suppose** $S$ is false. (Write "Suppose, for a contradiction, that ...".)
2. **Reason** correctly from that supposition, using definitions and known facts.
3. **Reach a contradiction**: some statement $q$ and its negation $\neg q$ both true.
4. **Conclude** that the supposition was wrong, so $S$ is true.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 110" role="img" aria-label="The plan of a proof by contradiction: assume not S, reason step by step, reach q and not q, which is impossible, so S is true">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="10" y="30" width="100" height="44" rx="6" fill="#eea66f"/>
    <rect x="130" y="30" width="100" height="44" rx="6" fill="#9cc9ea"/>
    <rect x="250" y="30" width="100" height="44" rx="6" fill="#eea66f"/>
    <rect x="370" y="30" width="90" height="44" rx="6" fill="#7ccf9a"/>
    <line x1="110" y1="52" x2="130" y2="52"/>
    <line x1="230" y1="52" x2="250" y2="52"/>
    <line x1="350" y1="52" x2="370" y2="52"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="60" y="56">suppose not S</text>
    <text x="180" y="56">valid steps</text>
    <text x="300" y="49">q and not q</text>
    <text x="300" y="66" font-size="11">impossible</text>
    <text x="415" y="56">so S</text>
    <text x="235" y="100" font-size="12">the only thing that can be wrong is the supposition</text>
  </g>
</svg>
</div>

Why is this allowed? Two facts from logic.

- Every statement is **either true or false**, never both and never neither. (This is called the law of the
  excluded middle.) So if "not $S$" is false, $S$ is true.
- A statement of the form "$q$ and not $q$" is **always false**: its truth table column is all F. If correct
  reasoning from "not $S$" leads to something always false, then "not $S$" cannot be true. This is modus tollens
  from [Valid arguments](../level-5/05-valid-arguments.md): "not $S$" implies something false, so "not $S$" is false.

### What "contradiction" means precisely

A contradiction is not "something surprising" or "something I did not expect". It is a statement that is false by
its form: a thing and its exact opposite, both claimed. Typical ones in proofs:

- a number that is both even and odd;
- a fraction chosen in lowest terms whose top and bottom are both even;
- a list that contains every prime, and a prime that is not on it;
- an integer strictly between 0 and 1;
- $0 = 1$, or $x < x$.

If your "contradiction" is only something strange, look again: strange things are often true.

### A warm-up: there is no largest even number

**Theorem.** There is no largest even integer.

**Proof.** Suppose, for a contradiction, that there is a largest even integer; call it $N$. Then $N = 2k$ for some
integer $k$. Now $N + 2 = 2(k + 1)$ is also even, and $N + 2 > N$. So $N + 2$ is an even integer larger than the
largest even integer. That contradicts the choice of $N$. So there is no largest even integer. ∎

The contradiction is exact: "$N$ is at least as big as every even integer" and "$N + 2$ is an even integer bigger
than $N$" cannot both be true.

### The square root of 2 is irrational

Recall: a number is **rational** if it equals $\frac{a}{b}$ for integers $a$, $b$ with $b \ne 0$; otherwise it is
**irrational**. Every fraction can be reduced to **lowest terms**, where top and bottom have no common factor
greater than 1 (divide both by their greatest common divisor).

**Theorem.** $\sqrt2$ is irrational.

**Proof.** Suppose, for a contradiction, that $\sqrt2$ is rational. Then $\sqrt2 = \frac{a}{b}$ for positive
integers $a$ and $b$, and we choose this fraction in lowest terms.

1. Squaring, $2 = \frac{a^2}{b^2}$, so $a^2 = 2b^2$. So $a^2$ is even.
2. By the theorem of [the last lesson](03-proof-by-contrapositive.md), if $a^2$ is even then $a$ is even. So
   $a = 2c$ for some integer $c$.
3. Substituting, $4c^2 = 2b^2$, so $b^2 = 2c^2$. So $b^2$ is even, and by the same theorem $b$ is even.
4. Now $a$ and $b$ are both even, so they have the common factor 2. But the fraction was in lowest terms.

That is a contradiction. So $\sqrt2$ is not rational: it is irrational. ∎

Look how the pieces fit: a definition (rational), a fact about fractions (lowest terms), a theorem proved earlier by
contrapositive, and a contradiction at the end. This is why every fraction in the opening table missed: the top
squared, $a^2$, would have to be **exactly** twice the bottom squared, and the proof shows that never happens.

The story goes that this discovery, made by followers of Pythagoras in ancient Greece, upset them badly, because
they believed every length was a ratio of whole numbers. Whatever the truth of the story, the proof itself appears
in Greek mathematics and has been read ever since. (For more on irrational numbers, see
[Proof that √2 is irrational](../../numbers/level-6/03-root-two-irrational.md) in Numbers.)

### Contradiction and contrapositive

To prove "if $p$ then $q$" by contradiction, you suppose $p$ **and** not $q$, and reach a contradiction. A proof by
contrapositive does part of this: it supposes not $q$ and reaches not $p$, which contradicts $p$. So every
contrapositive proof is a special contradiction proof. When the contradiction you reach is exactly "not $p$", write
it as a contrapositive: it is cleaner, and the reader sees exactly what was shown. Use contradiction when the
statement is not an "if ... then", like "there is no largest ..." or "$\sqrt2$ is irrational", or when the
contradiction turns up somewhere unexpected.

## Worked examples

**1. No smallest positive fraction.** Prove there is no smallest positive rational number.

**Proof.** Suppose, for a contradiction, that $r$ is the smallest positive rational. Then $\frac{r}{2}$ is also
rational (if $r = \frac{a}{b}$, then $\frac{r}{2} = \frac{a}{2b}$) and positive, and $\frac{r}{2} < r$. That
contradicts $r$ being the smallest. ∎

**2. A logarithm.** Prove that $\log_2 3$ is irrational. (It is the power you raise 2 to in order to get 3; it is
about 1.585.)

**Proof.** $\log_2 3$ is positive, since $2^0 = 1 < 3$. Suppose, for a contradiction, that $\log_2 3 = \frac{a}{b}$
with positive integers $a$, $b$. Then $2^{a/b} = 3$. Raise both sides to the power $b$: $2^a = 3^b$. The left side
is even (since $a \ge 1$), and the right side is odd (a product of odd numbers is odd). An integer cannot be both
even and odd: contradiction. ∎

**3. Euclid: there are infinitely many primes.** This proof is in Euclid's *Elements*, written around 300 BC.

**Proof.** Suppose, for a contradiction, that there are only finitely many primes, and list them all:
$p_1, p_2, \ldots, p_k$. Let

$$N = p_1 \times p_2 \times \cdots \times p_k + 1.$$

$N$ is greater than 1, so it has at least one prime factor $p$. That $p$ is on the list, because the list has every
prime. So $p$ divides the product $p_1 p_2 \cdots p_k$, and $p$ divides $N$, so $p$ divides their difference, which
is 1 (the argument of [Direct proof](02-direct-proof.md): if $N = pk$ and the product is $p\ell$, then
$1 = p(k - \ell)$). But
no prime divides 1. Contradiction. So there are infinitely many primes. ∎

Careful: the proof does **not** say $N$ is prime. With the first six primes, $N = 30031 = 59 \times 509$. It says
only that $N$ has a prime factor missing from the list. (More in
[There is no biggest prime](../../number-theory/level-4/05-no-biggest-prime.md).)

**4. An equation with no whole-number solutions.** Prove there are no integers $m$ and $n$ with $14m + 21n = 100$.

**Proof.** Suppose, for a contradiction, that there are. Then $100 = 7(2m + 3n)$, so $7 \mid 100$. But
$100 = 7 \times 14 + 2$ leaves remainder 2. Contradiction. ∎

## Try it

1. Prove there is no largest odd integer.
2. Prove that $\sqrt3$ is irrational. (Use worked example 1 of [the last lesson](03-proof-by-contrapositive.md):
   if $n^2$ is divisible by 3, so is $n$.)
3. Prove that if $r$ is rational and $x$ is irrational, then $r + x$ is irrational.
4. Prove that there are no integers $x$ and $y$ with $6x + 9y = 31$.
5. Prove that $\log_2 5$ is irrational.
6. Prove that $1 + \sqrt2$ is irrational. (Use question 3.)
7. What goes wrong if you try the $\sqrt2$ proof on $\sqrt4$? Find the exact step that fails.
8. Harder. Prove that if $a^2 + b^2 = c^2$ for integers $a$, $b$, $c$, then $a$ or $b$ is even. (Hint: an odd square
   leaves remainder 1 on division by 4, and an even square leaves remainder 0.)

??? note "Answers"
    1. Suppose $N$ is the largest odd integer, $N = 2k + 1$. Then $N + 2 = 2(k + 1) + 1$ is odd and bigger than $N$.
       Contradiction. ∎
    2. Suppose $\sqrt3 = \frac{a}{b}$ in lowest terms. Then $a^2 = 3b^2$, so $3 \mid a^2$, so $3 \mid a$. Write
       $a = 3c$: $9c^2 = 3b^2$, so $b^2 = 3c^2$, so $3 \mid b^2$ and $3 \mid b$. Then 3 is a common factor of $a$ and
       $b$, contradicting lowest terms. ∎
    3. Suppose $r + x = s$ is rational. Then $x = s - r$, a difference of two rationals, which is rational
       ($\frac{a}{b} - \frac{c}{d} = \frac{ad - bc}{bd}$). That contradicts $x$ being irrational. ∎
    4. Suppose there are. Then $31 = 3(2x + 3y)$, so $3 \mid 31$. But $31 = 3 \times 10 + 1$. Contradiction. ∎
    5. $\log_2 5 > 0$ since $5 > 1$. Suppose $\log_2 5 = \frac{a}{b}$ with positive integers. Then $2^a = 5^b$: even
       on the left, odd on the right. Contradiction. ∎
    6. 1 is rational and $\sqrt2$ is irrational, so by question 3 their sum is irrational. ∎
    7. $\sqrt4 = \frac{a}{b}$ gives $a^2 = 4b^2$, so $a$ is even, $a = 2c$, and $4c^2 = 4b^2$, so $b^2 = c^2$. The
       proof needed $b^2 = 2c^2$ to show $b$ is even. Here there is no factor 2, so $b$ need not be even, and no
       contradiction appears. Indeed $\sqrt4 = \frac{2}{1}$.
    8. Suppose $a$ and $b$ are both odd. Then $a^2$ and $b^2$ each leave remainder 1 on division by 4
       (since $(2k+1)^2 = 4(k^2 + k) + 1$), so $c^2 = a^2 + b^2$ leaves remainder 2. But every square leaves
       remainder 0 or 1 on division by 4. Contradiction. ∎

## Common mistake

**Calling something odd a contradiction.** "We get $b^2 = 2c^2$, which is weird" is not a contradiction. You must
reach a statement **and its opposite**: here, "$a$ and $b$ have no common factor" against "2 is a common factor".

**Forgetting what was assumed.** In a contradiction proof, the supposition is the one false thing. Every other step
must be correct. If you make an algebra mistake, you may "reach a contradiction" from the mistake, not from the
supposition, and the proof proves nothing.

## Where it leads

- Back: [Proof by contrapositive](03-proof-by-contrapositive.md) · Next: [Counterexamples and cases](05-counterexamples-cases.md).
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- Irrational numbers and the real number line: [Rational and irrational](../../numbers/level-6/02-rational-irrational.md).
- The method at its most powerful: [Russell's paradox](../level-8/03-russells-paradox.md) and
  [the halting problem](../level-8/05-halting-problem.md) are both proofs by contradiction.
- Contradiction proofs about the sizes of infinity: [Infinity](../../infinity/index.md).
- On the U of T shelf: [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 2: real numbers](../../../uoft/MAT158H1/unit02.md).
