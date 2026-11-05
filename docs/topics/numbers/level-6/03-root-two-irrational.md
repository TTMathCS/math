---
title: "Proof that √2 is irrational"
---

# Proof that √2 is irrational

*Numbers · level 6, lesson 3 of 7*

## A question to start

Computers have worked out $\sqrt2$ to trillions of decimal places, and no repeating block has ever turned up. Does that
prove $\sqrt2$ is irrational?

No. A block could, in principle, start repeating after the trillionth digit. Checking digits, however many, can never
settle the question, because there are always more digits left to check.

And yet mathematicians are completely certain that $\sqrt2$ is irrational, and have been for well over two thousand
years. A version of the argument was already mentioned by Aristotle, more than 2300 years ago, as a model example of
reasoning. It does not look at a single digit. It fits in a few lines, and by the end of this lesson you will be able
to write it out yourself, and adapt it to $\sqrt3$, $\sqrt5$ and $\sqrt6$.

## The idea

### Proof by contradiction

To prove something is **impossible**, it is often easiest to **suppose it is possible** and follow the consequences
until something breaks. If a supposition leads to a statement that is certainly false, the supposition must have been
false. This is **proof by contradiction**.

An everyday example. "Suppose I left my key in the car. Then the car would be unlocked, because it does not lock with
the key inside. But the car is locked. So I did not leave my key in the car."

For $\sqrt2$, we will suppose that $\sqrt2$ **is** a fraction, and show this leads to a fraction that is in lowest
terms and also is not. That cannot happen, so $\sqrt2$ is not a fraction.

### Tool 1: lowest terms

A fraction is in **lowest terms** when its top and bottom have no common factor bigger than 1. Every fraction can be
put in lowest terms: if the top and bottom share a factor, divide it out, and repeat. The numbers get smaller each
time, so this cannot go on forever. For example $\tfrac{12}{18} = \tfrac{6}{9} = \tfrac23$.

So **if** $\sqrt2$ were a fraction, it would be a fraction in lowest terms. In particular, its top and bottom could
not **both** be even.

### Tool 2: even and odd squares

An **even** number is a multiple of 2: it can be written $2k$ for some integer $k$. An **odd** number is one more than
an even number: $2k + 1$.

**An even number squared is even:** $(2k)^2 = 4k^2 = 2(2k^2)$, a multiple of 2.

**An odd number squared is odd:** $(2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is one more than a multiple of
2. (Check with $k = 3$: $7^2 = 49 = 2 \times 24 + 1$. ✓)

Turn the second fact around. If $p^2$ is even, could $p$ be odd? No: then $p^2$ would be odd. So:

**If $p^2$ is even, then $p$ is even.**

### The proof

**Claim.** $\sqrt2$ is irrational.

**Proof.**

1. Suppose, to get a contradiction, that $\sqrt2$ is rational. Then $\sqrt2 = \dfrac{p}{q}$ for some positive
   integers $p$ and $q$, and we can choose the fraction **in lowest terms** (Tool 1).
2. Square both sides: $2 = \dfrac{p^2}{q^2}$. Multiply both sides by $q^2$: this gives $p^2 = 2q^2$.
3. The right side is 2 times a whole number, so $p^2$ is even. By Tool 2, $p$ is even. So $p = 2k$ for some
   positive integer $k$.
4. Put $p = 2k$ into $p^2 = 2q^2$: $(2k)^2 = 2q^2$, that is, $4k^2 = 2q^2$. Divide both sides by 2: this gives $q^2 = 2k^2$.
5. Now the same reasoning as step 3 applies to $q$: $q^2$ is even, so $q$ is even.
6. So $p$ and $q$ are **both even**. But we chose $\tfrac{p}{q}$ in lowest terms, so they cannot both be even. This is
   a contradiction.
7. So the supposition in step 1 was false: $\sqrt2$ is not rational. It is **irrational**. ∎

Read it again and notice what it does **not** use: no decimals, no calculator, no "checking lots of cases". It covers
every possible fraction at once, including ones with a trillion digits on top and bottom.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 410" role="img" aria-labelledby="sk-m-root2-t"><title id="sk-m-root2-t">A square with sides 1 and its diagonal of length root 2, 1.41421356 and so on; supposing root 2 is a fraction in lowest terms leads to both parts being even, a contradiction</title><defs><filter id="sk-m-root2-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-root2-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-root2-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-root2-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-root2-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="410" filter="url(#sk-m-root2-paper)"/><g filter="url(#sk-m-root2-pen)"><text x="30" y="44" class="h">A length no fraction can name</text><path class="p room" d="M100 330 L300 330 L300 130 L100 130Z"/><path class="p red" d="M100 330 L300 130"/><text x="200" y="356" text-anchor="middle" class="l">1</text><text x="316" y="236" class="l">1</text><text x="180" y="222" text-anchor="end" class="b">√2</text><text x="360" y="150" class="l">1.41421356237…</text><text x="360" y="176" class="s">trillions of digits, no repeat,</text><text x="360" y="196" class="s">but that proves nothing</text><text x="360" y="246" class="l">Suppose √2 = a/b,</text><text x="360" y="270" class="s">in lowest terms.</text><text x="360" y="296" class="s">Then a and b both turn out</text><text x="360" y="316" class="s">even: not lowest terms after all.</text><text x="30" y="392" class="s">The diagonal of a square with sides 1 is real; no fraction is exactly its length.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

### Another way to see it: endless halving

Here is the same idea without "lowest terms". Suppose $p^2 = 2q^2$ for some positive whole numbers. Steps 3 to 5 show
that $p$ and $q$ are both even. Then $\tfrac{p}{2}$ and $\tfrac{q}{2}$ are smaller positive whole numbers, and they
satisfy the same equation (divide both sides of $p^2 = 2q^2$ by 4). So we can halve them again, and again, forever,
getting smaller and smaller positive whole numbers. That is impossible: positive whole numbers cannot keep getting
smaller forever, since they would pass 1. This style of argument is called **infinite descent**.

### A second proof, using last digits

There is often more than one proof of a fact. This one uses the last digit of square numbers.

The last digit of a square depends only on the last digit of the number. Squaring the digits 0 to 9 gives last digits

$$0, 1, 4, 9, 6, 5, 6, 9, 4, 1$$

So **a square can only end in 0, 1, 4, 5, 6 or 9**. And twice a square, $2q^2$, can only end in $2 \times$ those,
which gives last digits **0, 2, 8** (for example $2 \times 9 = 18$ ends in 8, and $2 \times 5 = 10$ ends in 0).

Now suppose $p^2 = 2q^2$ with $\tfrac{p}{q}$ in lowest terms. The two sides are equal, so they end in the same digit.
The only last digit in both lists is **0**. So:

- $p^2$ ends in 0, which only happens when $p$ ends in 0. So $p$ is a multiple of 5.
- $2q^2$ ends in 0, so $q^2$ ends in 0 or 5, which only happens when $q$ ends in 0 or 5. So $q$ is a multiple of 5.

Both are multiples of 5, contradicting lowest terms. Same conclusion, different route.

### The same proof for $\sqrt3$

For $\sqrt3$ we need a fact about multiples of 3 instead of even numbers. Every integer is a multiple of 3, or one
more, or two more: $3k$, $3k + 1$ or $3k + 2$. Square them:

- $(3k)^2 = 9k^2 = 3(3k^2)$: a multiple of 3.
- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$: not a multiple of 3.
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$: not a multiple of 3.

So **if $p^2$ is a multiple of 3, then $p$ is a multiple of 3**. Now copy the proof: suppose $\sqrt3 = \tfrac{p}{q}$
in lowest terms. Then $p^2 = 3q^2$, so $p$ is a multiple of 3, say $p = 3k$. Then $9k^2 = 3q^2$, so $q^2 = 3k^2$, and
$q$ is a multiple of 3. Both are multiples of 3: contradiction. So $\sqrt3$ is irrational.

### Why the proof fails for $\sqrt4$

A good test of understanding a proof is to see where it **breaks** for something false. $\sqrt4 = 2$ is rational, so
the proof must fail somewhere. Try it: suppose $\sqrt4 = \tfrac{p}{q}$ in lowest terms. Then $p^2 = 4q^2$, so $p^2$
is even and $p$ is even, $p = 2k$. Then $4k^2 = 4q^2$, so $q^2 = k^2$.

And here it stops. $q^2 = k^2$ says nothing about $q$ being even, so there is no contradiction. Indeed $p = 2$,
$q = 1$ works, and $\tfrac21$ is in lowest terms. The step that mattered for $\sqrt2$ was that dividing $4k^2 = 2q^2$
by 2 **left a 2 behind** on the other side. With 4, the factors of 2 balance out exactly, because 4 is a perfect
square.

In general, $\sqrt{n}$ is irrational for every whole number $n$ that is not a perfect square. The full proof uses the
fact that every whole number splits into primes in only one way, which is in [Number theory](../../number-theory/index.md).

## Worked examples

**1. Odd squares.** Show that $11^2$ is odd using $(2k + 1)^2 = 2(2k^2 + 2k) + 1$.

$11 = 2 \times 5 + 1$, so $k = 5$. Then $11^2 = 2(2 \times 25 + 2 \times 5) + 1 = 2 \times 60 + 1 = 121$. ✓ It is one
more than an even number, so it is odd.

**2. Prove that $\sqrt5$ is irrational.** (Fact: if $p^2$ is a multiple of 5, then $p$ is.)

1. Suppose $\sqrt5 = \tfrac{p}{q}$ in lowest terms.
2. Squaring, $p^2 = 5q^2$. So $p^2$ is a multiple of 5, and so $p$ is: $p = 5k$.
3. Then $25k^2 = 5q^2$, so $q^2 = 5k^2$. So $q^2$ is a multiple of 5, and so $q$ is.
4. Both $p$ and $q$ are multiples of 5, contradicting lowest terms. So $\sqrt5$ is irrational. ∎

(The fact holds because numbers of the form $5k + 1$, $5k + 2$, $5k + 3$, $5k + 4$ have squares that leave remainders
1, 4, 4, 1 when divided by 5, never 0.)

**3. Prove that $\sqrt6$ is irrational.**

1. Suppose $\sqrt6 = \tfrac{p}{q}$ in lowest terms. Then $p^2 = 6q^2 = 2(3q^2)$, so $p^2$ is even and $p$ is even:
   $p = 2k$.
2. Then $4k^2 = 6q^2$, so $2k^2 = 3q^2$.
3. The left side is even, so $3q^2$ is even. An odd number times an odd number is odd, and 3 is odd, so $q^2$ must be
   even. So $q$ is even.
4. Both even: contradiction. So $\sqrt6$ is irrational. ∎

**4. Where the proof breaks for $\sqrt9$.** Suppose $\sqrt9 = \tfrac{p}{q}$. Then $p^2 = 9q^2$, so $p$ is a multiple
of 3: $p = 3k$. Then $9k^2 = 9q^2$, so $k^2 = q^2$, which says nothing about $q$. No contradiction, and indeed
$\sqrt9 = \tfrac31$.

**5. Using the result.** Is $\sqrt2 \times \sqrt3$ rational?

$\sqrt2 \times \sqrt3 = \sqrt6$ (the product rule from [level 5](../level-5/06-square-roots.md)), and example 3 shows
that $\sqrt6$ is irrational. So it is **irrational**, even though it is a product of two irrationals. (Compare
$\sqrt2 \times \sqrt8 = \sqrt{16} = 4$, which is rational. You have to check each case.)

## Try it

1. Write $9^2$ in the form $2(\ldots) + 1$ using $k = 4$, and check that it equals 81.
2. In your own words, explain why "if $p^2$ is even then $p$ is even" is true.
3. Write out the proof that $\sqrt3$ is irrational in numbered steps, as in the proof for $\sqrt2$.
4. Show where the proof breaks if you try it on $\sqrt{16}$.
5. Prove that $\sqrt8$ is irrational directly: suppose $p^2 = 8q^2$ in lowest terms, and show that both $p$ and $q$
   are even.
6. A friend says: "$\sqrt2$ is irrational because its decimal never repeats." Why is this not a proof?
7. Prove that $1 + \sqrt3$ is irrational. (Use lesson 2.)
8. Challenge: use last digits to prove $\sqrt3$ is irrational. (Squares end in 0, 1, 4, 5, 6, 9; what can $3q^2$ end
   in?)

??? note "Answers"
    1. $2(2 \times 16 + 2 \times 4) + 1 = 2(32 + 8) + 1 = 2 \times 40 + 1 = 81$. ✓
    2. A whole number is either even or odd. If $p$ were odd, $p^2$ would be odd (odd times odd is odd). So when $p^2$
       is even, $p$ cannot be odd, and must be even.
    3. (1) Suppose $\sqrt3 = \tfrac{p}{q}$ in lowest terms. (2) Squaring, $p^2 = 3q^2$. (3) So $p^2$ is a multiple of
       3, and therefore so is $p$: $p = 3k$. (4) Then $9k^2 = 3q^2$, so $q^2 = 3k^2$. (5) So $q^2$ is a multiple of
       3, and so is $q$. (6) Both $p$ and $q$ are multiples of 3, contradicting lowest terms. (7) So $\sqrt3$ is
       irrational.
    4. $p^2 = 16q^2$, so $p$ is even, $p = 2k$, and $4k^2 = 16q^2$, so $k^2 = 4q^2$. Then $k$ is even, $k = 2m$, and
       $4m^2 = 4q^2$, so $m^2 = q^2$. This says nothing about $q$: no contradiction. Indeed $\sqrt{16} = \tfrac41$.
    5. $p^2 = 8q^2$ is even, so $p = 2k$. Then $4k^2 = 8q^2$, so $k^2 = 2q^2$. Then $k$ is even, $k = 2m$, and
       $4m^2 = 2q^2$, so $q^2 = 2m^2$, and $q$ is even. Both $p$ and $q$ are even: contradiction. So $\sqrt8$ is
       irrational.
    6. Nobody can check infinitely many digits. We only **know** the decimal never repeats **because** $\sqrt2$ is
       irrational (lessons 1 and 2). Using it as the reason would be going round in a circle.
    7. Suppose $1 + \sqrt3 = r$, a rational number. Then $\sqrt3 = r - 1$, which is rational. That contradicts
       $\sqrt3$ being irrational. So $1 + \sqrt3$ is irrational.
    8. Suppose $p^2 = 3q^2$ in lowest terms. $3q^2$ can end in $3 \times$ (0, 1, 4, 5, 6, 9), which gives last digits
       0, 3, 2, 5, 8, 7. The only digits in both lists are 0 and 5. If both sides end in 0, then $p$ ends in 0 and
       $q^2$ ends in 0, so $q$ ends in 0. If both end in 5, then $p$ ends in 5 and $q^2$ ends in 5, so $q$ ends in 5.
       Either way $p$ and $q$ are both multiples of 5: contradiction.

## Common mistake

**Forgetting to say "in lowest terms".** Without it, there is no contradiction at the end: "$p$ and $q$ are both
even" is perfectly possible for a fraction like $\tfrac{6}{4}$. The whole proof hangs on choosing the fraction in
lowest terms at the start (or on the infinite descent version).

**Claiming "$p^2$ is even" means "$p^2 = 2p$".** Even means "2 times **some** whole number", which is $2k$ for a
**new** letter $k$. Writing $p = 2p$ makes no sense. Always bring in a fresh letter.

## Where it leads

- Back: [Rational and irrational numbers](02-rational-irrational.md) · Next: [Radicals](04-radicals.md), where you
  simplify and calculate with roots like $\sqrt{72}$.
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- Proof by contradiction, and other kinds of proof: [Logic](../../logic/index.md).
- Even and odd numbers, multiples, and the unique splitting of numbers into primes: [Number theory](../../number-theory/index.md).
- This very proof appears as a model example of proof by contradiction at U of T:
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
