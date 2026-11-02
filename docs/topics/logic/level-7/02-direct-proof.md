---
title: "Direct proof"
---

# Direct proof

*Logic and puzzles · level 7, lesson 2 of 6*

## A question to start

Take any odd number, square it, and subtract 1.

$$3^2 - 1 = 8, \qquad 5^2 - 1 = 24, \qquad 7^2 - 1 = 48, \qquad 9^2 - 1 = 80, \qquad 11^2 - 1 = 120.$$

Every answer is a multiple of 8. Try $101^2 - 1 = 10200$: that is $8 \times 1275$. It works every time you try.

From the last lesson you know that trying is not enough. By the end of this lesson you will have a proof, five
lines long, that it works for **every** odd number, including ones with a million digits that nobody will ever
write down.

## The idea

### The plan of a direct proof

Most theorems have the shape **"if $p$, then $q$"**, often with a hidden "for every": *for every integer $n$, if $n$
is odd, then $n^2 - 1$ is a multiple of 8*. A **direct proof** goes straight from $p$ to $q$:

1. **Assume** the hypothesis $p$. Take a general object that satisfies it (any odd number, not a particular one).
2. **Unpack** the definitions: turn the words into algebra ("odd" becomes $n = 2k + 1$).
3. **Work**: use algebra and facts already known.
4. **Repack**: show the result has exactly the form the conclusion's definition asks for ("even" means
   $2 \times$ an integer).
5. **Conclude**: say in words what you have shown.

This is the logic of modus ponens from [Valid arguments](../level-5/05-valid-arguments.md), used again and again:
from $p$ and $p \to r$, get $r$; from $r$ and $r \to s$, get $s$; and so on until you reach $q$.

### The sum of two odd numbers is even

First a picture. An odd number is some pairs of dots with one dot left over. Put two odd numbers together, and the
two leftover dots make one more pair. Nothing is left over, so the sum is even.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Seven dots as three pairs and one extra, plus five dots as two pairs and one extra, makes twelve dots as six pairs: the two extra dots join into a pair">
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="20" cy="40" r="7"/><circle cx="20" cy="62" r="7"/>
    <circle cx="42" cy="40" r="7"/><circle cx="42" cy="62" r="7"/>
    <circle cx="64" cy="40" r="7"/><circle cx="64" cy="62" r="7"/>
    <circle cx="140" cy="40" r="7"/><circle cx="140" cy="62" r="7"/>
    <circle cx="162" cy="40" r="7"/><circle cx="162" cy="62" r="7"/>
    <circle cx="250" cy="40" r="7"/><circle cx="250" cy="62" r="7"/>
    <circle cx="272" cy="40" r="7"/><circle cx="272" cy="62" r="7"/>
    <circle cx="294" cy="40" r="7"/><circle cx="294" cy="62" r="7"/>
    <circle cx="316" cy="40" r="7"/><circle cx="316" cy="62" r="7"/>
    <circle cx="338" cy="40" r="7"/><circle cx="338" cy="62" r="7"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="86" cy="40" r="7"/>
    <circle cx="184" cy="40" r="7"/>
    <circle cx="360" cy="40" r="7"/><circle cx="360" cy="62" r="7"/>
  </g>
  <g font-size="18" text-anchor="middle" fill="currentColor">
    <text x="113" y="57">+</text>
    <text x="217" y="57">=</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="53" y="95">7 (odd)</text>
    <text x="162" y="95">5 (odd)</text>
    <text x="305" y="95">12 (even)</text>
  </g>
</svg>
</div>

The picture shows one example, but the idea in it works for every example. The algebra says the same thing for all
odd numbers at once.

**Theorem.** The sum of two odd integers is even.

**Proof.** Let $m$ and $n$ be odd integers. By the definition of odd, there are integers $a$ and $b$ with
$m = 2a + 1$ and $n = 2b + 1$. Then

$$m + n = (2a + 1) + (2b + 1) = 2a + 2b + 2 = 2(a + b + 1).$$

Since $a + b + 1$ is an integer (integers added to integers give integers), $m + n$ is 2 times an integer. By the
definition of even, $m + n$ is even. ∎

Notice the two **different** letters $a$ and $b$. If we had written $m = 2k + 1$ and $n = 2k + 1$, we would have
quietly assumed $m = n$, and proved only that an odd number plus **itself** is even.

### The product of two odd numbers is odd

**Theorem.** The product of two odd integers is odd.

**Proof.** Let $m = 2a + 1$ and $n = 2b + 1$ for integers $a$ and $b$. Then

$$mn = (2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1.$$

Since $2ab + a + b$ is an integer, $mn$ has the form $2 \times (\text{integer}) + 1$, so $mn$ is odd. ∎

The key step was **repacking**: we did not stop at $4ab + 2a + 2b + 1$, which does not look like anything, but
pulled out a 2 to show the shape "$2k + 1$" that the definition of odd asks for.

### Writing a proof in sentences

A proof is written for a reader, in full sentences, with the algebra inside them. Good habits:

- **Say what each letter is** the first time it appears: "Let $n$ be an odd integer."
- **Say why each step is allowed**: "by the definition of odd", "since the sum of integers is an integer".
- **Use new letters** for new unknowns, as above.
- **Go forwards**: each line follows from lines before it. Never start from what you want to prove.
- **End by saying what was shown**, in the words of the theorem, then ∎.

Compare a bad and a good write-up of "the square of an even number is even":

- Bad: "$2k$ squared $= 4k^2 = 2(2k^2)$ so even."
- Good: "Let $n$ be even, so $n = 2k$ for some integer $k$. Then $n^2 = 4k^2 = 2(2k^2)$. Since $2k^2$ is an
  integer, $n^2$ is even. ∎"

The bad one has the right algebra, but the reader has to guess what $k$ is and what was proved.

### Divisibility proofs

The same plan works with "divides". Recall that $a \mid b$ means $b = ak$ for some integer $k$.

**Theorem.** If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$.

**Proof.** Since $a \mid b$, there is an integer $k$ with $b = ak$. Since $a \mid c$, there is an integer $\ell$
with $c = a\ell$. Then $b + c = ak + a\ell = a(k + \ell)$, and $k + \ell$ is an integer, so $a \mid (b + c)$. ∎

This one fact explains many divisibility tricks: 7 divides 70 and 7 divides 21, so 7 divides 91, without dividing.

### Two directions: "if and only if"

"$p$ if and only if $q$" (written $p \leftrightarrow q$, from [The conditional](../level-4/03-conditional-promise.md))
means both $p \to q$ and $q \to p$. So a proof of it has **two** parts, one for each direction. For example,
"$n$ is odd if and only if $n + 1$ is even": if $n = 2k + 1$ then $n + 1 = 2(k + 1)$; and if $n + 1 = 2k$ then
$n = 2k - 1 = 2(k - 1) + 1$. Both directions done. ∎

## Worked examples

**1. Odd plus even.** Prove that an odd integer plus an even integer is odd.

**Proof.** Let $m$ be odd and $n$ be even, so $m = 2a + 1$ and $n = 2b$ for integers $a$, $b$. Then
$m + n = 2a + 2b + 1 = 2(a + b) + 1$. Since $a + b$ is an integer, $m + n$ is odd. ∎

**2. Divisibility passes along.** Prove: if $a \mid b$ and $b \mid c$, then $a \mid c$.

**Proof.** From $a \mid b$, $b = ak$ for some integer $k$. From $b \mid c$, $c = b\ell$ for some integer $\ell$.
Substitute the first into the second: $c = (ak)\ell = a(k\ell)$. Since $k\ell$ is an integer, $a \mid c$. ∎

For example $3 \mid 12$ and $12 \mid 60$, so $3 \mid 60$. Mathematicians call this property **transitivity**.

**3. The opening question.** Prove: if $n$ is odd, then $n^2 - 1$ is a multiple of 8.

**Proof.** Let $n = 2k + 1$ for an integer $k$. Then

$$n^2 - 1 = 4k^2 + 4k + 1 - 1 = 4k(k + 1).$$

Now $k$ and $k + 1$ are consecutive integers, so one of them is even (even and odd numbers alternate on the number
line). So $k(k + 1)$ is even: $k(k + 1) = 2j$ for some integer $j$ (lesson 5 proves this carefully, by cases). Then
$n^2 - 1 = 4 \times 2j = 8j$, a multiple of 8. ∎

Check with $n = 7$: $k = 3$, $4 \times 3 \times 4 = 48 = 8 \times 6$. ✓ Notice how the proof did more than check:
it showed **why** the answer is a multiple of 8. The 4 comes from squaring $2k$, and the extra 2 comes from
$k(k + 1)$ being even.

**4. A proof with a hidden step.** Prove: the difference of the squares of two consecutive integers is odd.

**Proof.** Let the integers be $n$ and $n + 1$. Then $(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$. Since $n$ is an
integer, $2n + 1$ is odd. ∎

Bonus: $2n + 1 = n + (n + 1)$. So the difference of two consecutive squares is the **sum** of the two numbers:
$13^2 - 12^2 = 25 = 12 + 13$. A good proof often shows more than it set out to.

## Try it

1. Prove that the product of an even integer and any integer is even.
2. Prove that if $n$ is odd, then $n^2 + 3$ is a multiple of 4.
3. Prove that if $m$ and $n$ are both odd, then $m^2 + n^2$ is even.
4. Prove that if $a \mid b$, then $a \mid bc$ for every integer $c$.
5. Prove that if $a \mid b$ and $a \mid c$, then $a \mid (3b - 5c)$.
6. Find the mistake in this "proof" that the sum of two even numbers is a multiple of 4: "Let the even numbers be
   $2k$ and $2k$. Then the sum is $4k$, a multiple of 4."
7. Is it true that "$n$ is even if and only if $n^2 + n + 1$ is odd"? Prove the direction that is true, and give a
   counterexample to the direction that is false. (Try $n = 3$.)
8. Harder. Use worked example 3 to prove that if $n$ is odd then $n^3 - n$ is a multiple of 8.

??? note "Answers"
    1. Let $m$ be even, $m = 2a$, and let $n$ be any integer. Then $mn = 2(an)$, and $an$ is an integer, so $mn$ is
       even. ∎
    2. Let $n = 2k + 1$. Then $n^2 + 3 = 4k^2 + 4k + 1 + 3 = 4k^2 + 4k + 4 = 4(k^2 + k + 1)$, and $k^2 + k + 1$ is an
       integer, so $n^2 + 3$ is a multiple of 4. ∎ (Check: $5^2 + 3 = 28 = 4 \times 7$.)
    3. By the product theorem, $m^2 = m \times m$ and $n^2 = n \times n$ are both odd. By the sum theorem, the sum of
       two odd integers is even. So $m^2 + n^2$ is even. ∎ (Using earlier theorems is allowed and saves work.)
    4. $b = ak$ for an integer $k$, so $bc = akc = a(kc)$, and $kc$ is an integer. So $a \mid bc$. ∎
    5. $b = ak$ and $c = a\ell$, so $3b - 5c = 3ak - 5a\ell = a(3k - 5\ell)$, and $3k - 5\ell$ is an integer. ∎
    6. Using the same letter $k$ for both assumes the two even numbers are **equal**. With different letters,
       $2a + 2b = 2(a + b)$, which is even but not always a multiple of 4: $2 + 4 = 6$ is a counterexample.
    7. The trap: $n^2 + n + 1$ is odd for **every** integer $n$. If $n$ is even, $n = 2k$:
       $4k^2 + 2k + 1 = 2(2k^2 + k) + 1$, odd. If $n$ is odd, $n = 2k + 1$:
       $n^2 + n + 1 = 4k^2 + 6k + 3 = 2(2k^2 + 3k + 1) + 1$, also odd. So "if $n$ is even then $n^2 + n + 1$ is odd" is true, but the other
       direction is false: $n = 3$ gives $13$, which is odd, yet 3 is not even. The "if and only if" is **false**.
       Always prove both directions; one can fail.
    8. $n^3 - n = n(n^2 - 1)$. By worked example 3, $n^2 - 1 = 8j$ for an integer $j$, so $n^3 - n = 8(nj)$, and
       $nj$ is an integer. ∎ (Check: $5^3 - 5 = 120 = 8 \times 15$.)

## Common mistake

**Proving with numbers instead of letters.** "Let the odd numbers be 3 and 5; $3 \times 5 = 15$ is odd" checks one
case. A proof needs general letters, $2a + 1$ and $2b + 1$.

**Stopping before repacking.** Reaching $4ab + 2a + 2b + 1$ and writing "so it is odd" leaves the main step out.
Show the exact form the definition needs: $2(\text{integer}) + 1$, and say why the bracket is an integer.

## Where it leads

- Back: [What a proof is](01-what-a-proof-is.md) · Next: [Proof by contrapositive](03-proof-by-contrapositive.md),
  for when the direct road is blocked.
- [Level 7 page](index.md) · [Logic topic page](../index.md)
- Direct proofs about whole numbers fill [Number theory](../../number-theory/index.md); the divisibility facts here
  are the start of [Euclid's algorithm](../../number-theory/level-4/04-euclids-algorithm.md).
- Direct proofs in geometry: [How to write a geometric proof](../../geometry/level-8/01-geometric-proof.md).
- On the U of T shelf: [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
