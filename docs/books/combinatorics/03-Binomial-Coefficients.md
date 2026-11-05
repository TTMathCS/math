# 3. Binomial coefficients

*The numbers $\binom{n}{k}$ count choices, but they turn up far beyond counting: in expanding $(x + y)^n$, in
probability, in the digits of numbers written in base $p$, and in the fractal pattern of a triangle coloured by odd
and even. This chapter studies them as objects in their own right. It builds Pascal's triangle, proves the binomial
theorem by counting, proves the classic identities by counting one set in two ways, extends everything to more than
two kinds (the multinomial theorem), shows what happens to Pascal's triangle modulo a prime (Lucas' theorem), and
ends with Stirling's formula, which tells how big these numbers are.*

!!! abstract "In this chapter"

    **You will learn:**

    - Pascal's triangle and Pascal's rule $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$, with a counting proof
    - the binomial theorem, proved by choosing, and Newton's extension to any exponent
    - combinatorial proofs: Vandermonde's identity, the hockey stick, and the sum of the squares of a row
    - multinomial coefficients and the multinomial theorem
    - Lucas' theorem on $\binom{n}{k}$ modulo a prime, and why Pascal's triangle mod 2 is the Sierpinski triangle
    - Stirling's approximation $n! \approx \sqrt{2\pi n}\,(n/e)^n$, simple bounds with full proofs, and what they say about sizes

    **You need:** [Chapter 1](01-Counting-Principles.md) and [Chapter 2](02-Permutations-and-Combinations.md)
    (especially $\binom{n}{k} = \frac{n!}{k!(n-k)!}$). Section 3.5 uses remainders (congruences), as in
    [Number theory, chapter 4](../number-theory/04-Congruences.md); section 3.6 uses logarithms and, for one step, an
    integral. For a gentler version, see the Topics lessons
    [Pascal's triangle](../../topics/counting/level-5/03-pascals-triangle.md),
    [Choosing who is in is choosing who is out](../../topics/counting/level-5/02-in-or-out.md) and
    [Expanding by choosing](../../topics/counting/level-7/01-expanding-by-choosing.md).

    **Levels:** 3.1 and 3.2 are beginner; 3.3 and 3.4 are intermediate; 3.5 and 3.6 are advanced.

## 3.1 Pascal's triangle

**A question.** Is there a way to find $\binom{n}{k}$ without multiplying and dividing factorials, using only
addition?

Write the binomial coefficients in rows, row $n$ holding $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}$, and
centre the rows:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 270" role="img" aria-label="Pascal's triangle, rows 0 to 7. Each entry is the sum of the two above it; the entries 10 and 10 in row 5 are highlighted with their sum 20 below them in row 6">
  <circle cx="220" cy="24" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="220" y="28" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="28" font-size="11" fill="currentColor">n=0</text>
  <circle cx="196" cy="56" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="196" y="60" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="244" cy="56" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="244" y="60" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="60" font-size="11" fill="currentColor">n=1</text>
  <circle cx="172" cy="88" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="172" y="92" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="220" cy="88" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="220" y="92" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <circle cx="268" cy="88" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="268" y="92" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="92" font-size="11" fill="currentColor">n=2</text>
  <circle cx="148" cy="120" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="148" y="124" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="196" cy="120" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="196" y="124" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <circle cx="244" cy="120" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="244" y="124" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <circle cx="292" cy="120" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="292" y="124" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="124" font-size="11" fill="currentColor">n=3</text>
  <circle cx="124" cy="152" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="124" y="156" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="172" cy="152" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="172" y="156" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <circle cx="220" cy="152" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="220" y="156" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <circle cx="268" cy="152" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="268" y="156" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <circle cx="316" cy="152" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="316" y="156" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="156" font-size="11" fill="currentColor">n=4</text>
  <circle cx="100" cy="184" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="188" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="148" cy="184" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="148" y="188" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <circle cx="196" cy="184" r="14" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="196" y="188" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <circle cx="244" cy="184" r="14" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="244" y="188" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <circle cx="292" cy="184" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="292" y="188" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <circle cx="340" cy="184" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="340" y="188" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="188" font-size="11" fill="currentColor">n=5</text>
  <circle cx="76" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="76" y="220" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="124" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="124" y="220" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <circle cx="172" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="172" y="220" text-anchor="middle" font-size="12" fill="currentColor">15</text>
  <circle cx="220" cy="216" r="14" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="220" y="220" text-anchor="middle" font-size="12" fill="currentColor">20</text>
  <circle cx="268" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="268" y="220" text-anchor="middle" font-size="12" fill="currentColor">15</text>
  <circle cx="316" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="316" y="220" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <circle cx="364" cy="216" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="364" y="220" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="220" font-size="11" fill="currentColor">n=6</text>
  <circle cx="52" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="52" y="252" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <circle cx="100" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="252" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <circle cx="148" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="148" y="252" text-anchor="middle" font-size="12" fill="currentColor">21</text>
  <circle cx="196" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="196" y="252" text-anchor="middle" font-size="12" fill="currentColor">35</text>
  <circle cx="244" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="244" y="252" text-anchor="middle" font-size="12" fill="currentColor">35</text>
  <circle cx="292" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="292" y="252" text-anchor="middle" font-size="12" fill="currentColor">21</text>
  <circle cx="340" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="340" y="252" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <circle cx="388" cy="248" r="14" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <text x="388" y="252" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="16" y="252" font-size="11" fill="currentColor">n=7</text>
  <line x1="196" y1="198" x2="208" y2="202" stroke="currentColor" stroke-width="1.5"/>
  <line x1="244" y1="198" x2="232" y2="202" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Every row starts and ends with 1, and every other entry is the **sum of the two entries just above it**. In row 6,
$20 = 10 + 10$ (highlighted). So the whole triangle can be built by addition alone, and that is the answer to the
question. The pattern is a theorem.

**Theorem 3.1 (Pascal's rule).** For $1 \le k \le n - 1$,

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} .
$$

*Combinatorial proof.* Count the $k$-element subsets of $\{1, 2, \dots, n\}$ by asking whether they contain the
element $n$. Those that contain $n$ are made by choosing the other $k - 1$ elements from $\{1, \dots, n-1\}$:
$\binom{n-1}{k-1}$ of them. Those that do not contain $n$ choose all $k$ elements from $\{1, \dots, n-1\}$:
$\binom{n-1}{k}$ of them. The two kinds are disjoint and together are all $k$-subsets, so the sum rule gives the
identity. $\square$

*Algebraic check.* Put the right side over a common denominator:

$$
\frac{(n-1)!}{(k-1)!\,(n-k)!} + \frac{(n-1)!}{k!\,(n-1-k)!}
= \frac{(n-1)!}{k!\,(n-k)!}\bigl(k + (n-k)\bigr) = \frac{n!}{k!\,(n-k)!} .
$$

Both proofs are correct. The first explains *why*: it shows what the two pieces count. This chapter prefers proofs of
the first kind, called **combinatorial proofs** (or **bijective proofs** when they build an explicit bijection),
because they generalise: once you see what each side counts, you can invent new identities.

**Things to see in the triangle.**

- **Symmetry.** Each row reads the same backwards: $\binom{n}{k} = \binom{n}{n-k}$ (§2.3).
- **Row sums.** Row $n$ adds up to $2^n$: $1 + 4 + 6 + 4 + 1 = 16$. Proof: both sides count all subsets of an
  $n$-element set, the left side sorted by size.
- **The diagonals.** The second diagonal ($1, 2, 3, 4, \dots$) is the counting numbers $\binom{n}{1} = n$. The third
  ($1, 3, 6, 10, 15, \dots$) is the triangular numbers $\binom{n}{2} = n(n-1)/2$, the handshake numbers. The fourth
  ($1, 4, 10, 20, 35, \dots$) is the tetrahedral numbers: the number of balls in a triangular pyramid of cannonballs.
- **Powers of 11.** Rows 0 to 4 read as numbers are $1, 11, 121, 1331, 14641$, the powers of 11. That is the
  binomial theorem with $x = 10$, $y = 1$; from row 5 on the entries exceed 9 and carry, and the pattern hides.
- **The middle grows.** The largest entry of row $n$ is in the middle. Indeed
  $\binom{n}{k+1} / \binom{n}{k} = \frac{n-k}{k+1}$, which is more than 1 exactly when $k < \frac{n-1}{2}$, so the
  entries rise up to the middle and fall after it. Such a sequence is called **unimodal**.

**Worked example: the routes again.** The number of shortest grid routes from $(0,0)$ to $(a, b)$ is
$\binom{a+b}{a}$ (§2.2). Pascal's rule is the statement that every route arrives at $(a, b)$ either from the left,
from $(a-1, b)$, or from below, from $(a, b-1)$. Write the route counts at the grid points and you get Pascal's
triangle tilted by 45 degrees.

**History.** The triangle is much older than Pascal. Indian commentators on Pingala's metres had a rule equivalent
to it by about the 10th century (Halayudha's commentary). In the Islamic world al-Karaji (around 1000) described it,
in a work now known through al-Samaw'al's quotations, and Omar Khayyam knew it. In China it is called **Yang Hui's
triangle** after Yang Hui's book of 1261, which credits it to Jia Xian (11th century), and Zhu Shijie's *Jade Mirror
of the Four Unknowns* (1303) draws it to row 8. In Europe it appears in Petrus Apianus (1527), Michael Stifel and
Niccolò Tartaglia. Blaise Pascal's *Traité du triangle arithmétique*, written in 1654 and printed in 1665, was the
first to study it systematically, proving its properties (with one of the first clear uses of mathematical induction)
and applying it to probability.

<figure class="play" data-play="pascal"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Pascal's triangle: each number is the two above added; each row sums to a power of 2.</figcaption></figure>

## 3.2 The binomial theorem

**A question.** What is $(x + y)^5$ multiplied out, without multiplying bracket by bracket?

**Theorem 3.2 (binomial theorem).** For any whole number $n \ge 0$ and any numbers $x, y$,

$$
(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{k} y^{n-k} = y^n + \binom{n}{1} x y^{n-1} + \binom{n}{2} x^2 y^{n-2} + \dots + x^n .
$$

*Combinatorial proof.* Write the power as a product of $n$ brackets,

$$
(x + y)^n = (x + y)(x + y) \cdots (x + y) .
$$

Multiplying out means: from each bracket choose either its $x$ or its $y$, multiply the choices, and add up the
results over all $2^n$ ways of choosing. A way of choosing that takes $x$ from exactly $k$ of the brackets (and $y$
from the other $n - k$) produces the product $x^k y^{n-k}$. The number of ways that do so is the number of ways to
choose *which* $k$ brackets give $x$: $\binom{n}{k}$. So $x^k y^{n-k}$ appears with coefficient $\binom{n}{k}$.
$\square$

That is why the $\binom{n}{k}$ are called **binomial coefficients**: they are the coefficients in the power of a
binomial (a two-term sum). A proof by induction, using Pascal's rule to combine the terms of
$(x + y)(x + y)^{n-1}$, is in [Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md#84-the-binomial-theorem-and-pascals-triangle).

**Worked example 1.** Reading row 5 of the triangle,

$$
(x + y)^5 = x^5 + 5x^4 y + 10 x^3 y^2 + 10 x^2 y^3 + 5 x y^4 + y^5 .
$$

With $y = 2$: $(x + 2)^5 = x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32$ (the coefficients are
$\binom{5}{k} 2^{5-k}$).

**Worked example 2: one coefficient.** What is the coefficient of $x^3$ in $(2x - 1)^7$? The term with $x^3$ comes
from choosing $2x$ from 3 brackets and $-1$ from the other 4: $\binom{7}{3} (2x)^3 (-1)^4 = 35 \cdot 8\,x^3$. So the
coefficient is $280$. For $x^4$: $\binom{7}{4} 2^4 (-1)^3 = -560$. Check: expanding with a computer algebra system
gives $280$ and $-560$.

**Consequences.** Choosing values for $x$ and $y$ turns the theorem into identities.

- $x = y = 1$: $\sum_k \binom{n}{k} = 2^n$, the row sums again.
- $x = -1$, $y = 1$ (with $n \ge 1$): $\sum_k (-1)^k \binom{n}{k} = 0^n = 0$. So
  $\binom{n}{0} + \binom{n}{2} + \dots = \binom{n}{1} + \binom{n}{3} + \dots$: an $n$-element set has as many
  even-sized subsets as odd-sized ones. Each kind is half of $2^n$, so $2^{n-1}$. This is the toggling bijection of
  [§1.4](01-Counting-Principles.md#14-bijections-the-key-idea), in algebra.
- $x = 2$, $y = 1$: $\sum_k \binom{n}{k} 2^k = 3^n$. Counting proof: colour each of $n$ elements red, blue or green;
  sort the colourings by the set of elements that are *not* green, which has some size $k$, and those $k$ elements
  are then coloured red or blue in $2^k$ ways.

**Worked example 3: quick approximations.** $1.01^{10} = (1 + 0.01)^{10} = 1 + 10(0.01) + 45(0.0001) + 120(0.000001) + \dots$
$= 1 + 0.1 + 0.0045 + 0.00012 + \dots \approx 1.1046$. The true value is $1.10462\ldots$. Each further term is much
smaller than the one before, which is why compound interest over a short time is close to simple interest.

**Newton's binomial series.** *Level: intermediate (this paragraph only).* The formula
$\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!}$ makes sense for *any* number $n$, not only a whole number. For any
real $a$ define

$$
\binom{a}{k} = \frac{a(a-1)(a-2)\cdots(a-k+1)}{k!} .
$$

Isaac Newton found, around 1665, that for $|x| < 1$

$$
(1 + x)^a = \sum_{k=0}^{\infty} \binom{a}{k} x^k = 1 + a x + \frac{a(a-1)}{2} x^2 + \frac{a(a-1)(a-2)}{6} x^3 + \dots
$$

When $a$ is a whole number, $\binom{a}{k} = 0$ for $k > a$ and the series stops: it is Theorem 3.2. Otherwise it goes
on forever. Two examples:

- $a = \tfrac12$: $\sqrt{1 + x} = 1 + \tfrac12 x - \tfrac18 x^2 + \tfrac1{16} x^3 - \dots$, so
  $\sqrt{1.01} \approx 1 + 0.005 - 0.0000125 = 1.0049875$ (true value $1.00498756\ldots$).
- $a = -n$ for a whole number $n \ge 1$: $\binom{-n}{k} = (-1)^k \binom{n + k - 1}{k}$ (each of the $k$ factors
  $-n, -n-1, \dots$ changes sign).

Putting $-x$ in place of $x$ in the second case cancels the signs, and gives

$$
\frac{1}{(1 - x)^n} = \sum_{k=0}^{\infty} \binom{n + k - 1}{k} x^k .
$$

The coefficients are the stars and bars numbers of [§2.4](02-Permutations-and-Combinations.md#24-with-repetition-stars-and-bars),
and that is no accident: $1/(1-x) = 1 + x + x^2 + \dots$, and multiplying $n$ copies of it, the coefficient of $x^k$
counts the ways to write $k = k_1 + \dots + k_n$ with each $k_i \ge 0$. For $n = 3$ the series begins
$1 + 3x + 6x^2 + 10x^3 + 15x^4 + \dots$. This is the first glimpse of **generating functions**, the subject of
[Chapter 7](07-Generating-Functions.md). The proof that Newton's series converges to $(1+x)^a$ when $|x| < 1$ is
analysis rather than counting (it uses Taylor's theorem); see the U of T guide
[MAT137 Unit 14, Power series and Taylor series](../../uoft/MAT137/unit14.md).

## 3.3 Identities by counting two ways

*Level: intermediate.*

**A question.** Why is $\binom{4}{0}^2 + \binom{4}{1}^2 + \binom{4}{2}^2 + \binom{4}{3}^2 + \binom{4}{4}^2 = 1 + 16 + 36 + 16 + 1 = 70 = \binom{8}{4}$?

There are hundreds of identities among binomial coefficients. Algebra can verify most of them, but a combinatorial
proof explains them, and the method is always the same: **find a set that each side counts.** Here are the four most
useful, each with such a proof.

**Identity 1 (the committee chair).** For $1 \le k \le n$,

$$
k \binom{n}{k} = n \binom{n-1}{k-1} .
$$

*Proof.* Count the ways to choose, from $n$ people, a committee of $k$ with one member as its chair. Choose the
committee first ($\binom{n}{k}$ ways) and then its chair from its $k$ members: the left side. Or choose the chair
first, from all $n$ people, and then the other $k - 1$ members from the $n - 1$ remaining: the right side. $\square$

Adding over $k$: $\sum_k k\binom{n}{k} = n \sum_k \binom{n-1}{k-1} = n 2^{n-1}$. In words, if you add up the sizes of
all subsets of an $n$-set you get $n 2^{n-1}$: each of the $n$ elements is in exactly half of the $2^n$ subsets.
Check for $n = 10$: $\sum_k k\binom{10}{k} = 5120 = 10 \cdot 2^9$.

**Identity 2 (Vandermonde's identity).** For whole numbers $m, n, k \ge 0$,

$$
\sum_{j=0}^{k} \binom{m}{j} \binom{n}{k - j} = \binom{m + n}{k} .
$$

*Proof.* A club has $m$ men and $n$ women. The right side counts the committees of $k$ members. The left side counts
the same committees sorted by the number $j$ of men: choose the $j$ men in $\binom{m}{j}$ ways and the $k - j$ women
in $\binom{n}{k-j}$ ways. Different $j$ give disjoint sets of committees. $\square$

For example, with 7 men, 5 women and $k = 4$: $\binom{5}{4} + 7\binom{5}{3} + 21\binom{5}{2} + 35\binom{5}{1} + 35\binom{5}{0} = 5 + 70 + 210 + 175 + 35 = 495 = \binom{12}{4}$.

The identity is named after Alexandre-Théophile Vandermonde, who published it in 1772; it was known much earlier in
China, where Zhu Shijie gave it in 1303.

**Identity 3 (sum of squares of a row).**

$$
\sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n} .
$$

*Proof.* Use Vandermonde with $m = n$ and $k = n$, and the symmetry $\binom{n}{n-j} = \binom{n}{j}$:
$\binom{2n}{n} = \sum_j \binom{n}{j}\binom{n}{n-j} = \sum_j \binom{n}{j}^2$. As a story: choose $n$ people from $n$
men and $n$ women; if you take $j$ men, you take $n - j$ women, which is the same as choosing which $j$ women to
*leave out*. $\square$

That answers the opening question: for $n = 4$ both sides are 70.

**Identity 4 (the hockey stick).** For $0 \le k \le n$,

$$
\binom{k}{k} + \binom{k+1}{k} + \binom{k+2}{k} + \dots + \binom{n}{k} = \binom{n+1}{k+1} .
$$

In Pascal's triangle the left side runs down a diagonal and the right side sits just below and beside its end,
which looks like a hockey stick. For example, $1 + 3 + 6 + 10 = 20$ is $\binom{2}{2} + \binom{3}{2} + \binom{4}{2} + \binom{5}{2} = \binom{6}{3}$.

*Proof.* Count the $(k+1)$-element subsets of $\{1, 2, \dots, n+1\}$, sorted by their **largest** element. If the
largest element is $m + 1$, the other $k$ elements are chosen from $\{1, \dots, m\}$, in $\binom{m}{k}$ ways. The
largest element can be anything from $k + 1$ (when $m = k$) to $n + 1$ (when $m = n$). Adding over $m$ gives the
left side. $\square$

With $k = 1$ the hockey stick says $1 + 2 + \dots + n = \binom{n+1}{2}$, which we proved the same way in
[§1.5](01-Counting-Principles.md#15-double-counting). With $k = 2$ it says that the sum of the first $n - 1$
triangular numbers is a tetrahedral number: stacking triangular layers of cannonballs makes a pyramid.

**A general method.** Each proof above had the same three steps: (1) describe a set of objects; (2) count it directly
for one side; (3) split it into disjoint cases, or build it in a different order, for the other side. The most useful
ways of splitting are "by whether a special element is in" (Pascal's rule), "by a special element's value" (the
largest element, the hockey stick), and "by how many come from each part" (Vandermonde).

**Try it in Python.** Checking an identity numerically for many cases is not a proof, but it catches errors fast:

```python
from math import comb

for n in range(12):
    assert sum(comb(n, k)**2 for k in range(n + 1)) == comb(2*n, n)
    for k in range(n + 1):
        assert sum(comb(i, k) for i in range(k, n + 1)) == comb(n + 1, k + 1)
print("both identities hold for n < 12")
```

## 3.4 The multinomial theorem

*Level: intermediate.*

**A question.** What is the coefficient of $x^2 y^3 z$ in $(x + y + z)^6$?

The binomial theorem's proof works for any number of terms. Multiplying out
$(x + y + z)^6 = (x + y + z)\cdots(x + y + z)$ means choosing one of $x, y, z$ from each of the 6 brackets. To get
$x^2 y^3 z$ we must choose $x$ from 2 brackets, $y$ from 3 and $z$ from 1. The number of ways is the number of words
of length 6 with two $x$s, three $y$s and one $z$, which by Theorem 2.2 is

$$
\frac{6!}{2!\,3!\,1!} = 60 .
$$

**Definition.** For whole numbers $k_1, \dots, k_m \ge 0$ with $k_1 + \dots + k_m = n$, the **multinomial
coefficient** is

$$
\binom{n}{k_1, k_2, \dots, k_m} = \frac{n!}{k_1!\, k_2! \cdots k_m!} .
$$

It counts three equivalent things: the words of length $n$ with $k_i$ copies of letter $i$; the ways to split $n$
labelled objects into $m$ labelled groups of sizes $k_1, \dots, k_m$; and the ways to deal $n$ different cards to $m$
players so that player $i$ gets $k_i$ cards. With $m = 2$ it is the binomial coefficient:
$\binom{n}{k, n-k} = \binom{n}{k}$.

**Theorem 3.3 (multinomial theorem).**

$$
(x_1 + x_2 + \dots + x_m)^n = \sum_{\substack{k_1 + \dots + k_m = n \\ k_i \ge 0}} \binom{n}{k_1, \dots, k_m} x_1^{k_1} x_2^{k_2} \cdots x_m^{k_m} .
$$

*Proof.* The term $x_1^{k_1} \cdots x_m^{k_m}$ arises from each way of choosing $x_1$ from $k_1$ of the $n$ brackets,
$x_2$ from $k_2$ of them, and so on. Such a way of choosing is a word of length $n$ in which letter $i$ appears $k_i$
times (position $j$ of the word says which variable bracket $j$ gave), and Theorem 2.2 counts them. $\square$

**Worked example 1: a card deal.** A bridge deal gives 13 cards to each of 4 named players from a deck of 52. The
number of deals is

$$
\binom{52}{13, 13, 13, 13} = \frac{52!}{(13!)^4} = 53\,644\,737\,765\,488\,792\,839\,237\,440\,000 ,
$$

about $5.36 \times 10^{28}$. Equivalently, deal in stages: $\binom{52}{13}\binom{39}{13}\binom{26}{13}\binom{13}{13}$.
The multinomial coefficient is a product of binomial coefficients, which is another proof of its formula.

**Worked example 2: counting all the terms.** Setting every $x_i = 1$ in the theorem: the multinomial coefficients
for a fixed $n$ and $m$ add up to $m^n$. That is the number of words of length $n$ over $m$ letters, sorted by how
many times each letter appears. The number of different terms in the sum is the number of solutions of
$k_1 + \dots + k_m = n$, which by stars and bars is $\binom{n + m - 1}{m - 1}$: for $(x + y + z)^4$, 15 terms with
coefficients adding to $3^4 = 81$.

**Worked example 3: arrangements with order inside groups.** Twelve students are split into a team of 5, a team of 4
and a team of 3 (the teams are different, say by sport). In how many ways? $\binom{12}{5,4,3} = \frac{12!}{5!\,4!\,3!} = 27\,720$.
If instead they are split into three teams of 4 with *no* names, divide by the $3!$ ways of naming the teams:
$\frac{12!}{(4!)^3\, 3!} = 5775$. The division is right here because the three teams have the same size, so naming
them is the only extra information; with sizes 5, 4, 3 the sizes already tell the teams apart.

## 3.5 Lucas' theorem and Pascal's triangle mod 2

*Level: advanced.*

**A question.** Colour each entry of Pascal's triangle by whether it is odd or even. What pattern appears?

Here are rows 0 to 31, with odd entries filled (the rows are drawn left-aligned, so row $n$ runs from $k = 0$ at the
left edge to $k = n$):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 400" role="img" aria-label="Rows 0 to 31 of Pascal's triangle with odd entries as filled orange squares and even entries left empty: the pattern is the Sierpinski triangle">
  <rect x="8" y="8" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="20" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="20" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="32" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="32" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="44" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="44" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="44" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="44" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="56" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="56" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="68" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="68" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="68" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="68" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="80" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="80" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="80" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="80" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="92" y="92" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="104" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="104" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="116" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="116" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="116" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="116" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="128" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="128" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="128" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="128" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="140" y="140" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="152" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="152" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="152" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="152" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="164" y="164" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="176" y="176" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="92" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="140" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="164" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="176" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="188" y="188" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="200" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="200" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="212" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="212" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="212" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="212" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="224" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="224" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="224" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="224" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="236" y="236" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="248" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="248" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="248" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="248" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="260" y="260" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="272" y="272" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="92" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="236" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="260" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="272" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="284" y="284" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="296" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="296" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="296" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="296" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="308" y="308" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="320" y="320" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="140" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="236" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="308" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="320" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="332" y="332" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="344" y="344" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="164" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="260" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="308" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="344" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="356" y="356" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="176" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="272" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="320" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="344" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="368" y="368" width="11" height="11" fill="#eea66f"/>
  <rect x="8" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="20" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="32" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="44" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="56" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="68" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="80" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="92" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="104" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="116" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="128" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="140" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="152" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="164" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="176" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="188" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="200" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="212" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="224" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="236" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="248" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="260" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="272" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="284" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="296" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="308" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="320" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="332" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="344" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="356" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="368" y="380" width="11" height="11" fill="#eea66f"/>
  <rect x="380" y="380" width="11" height="11" fill="#eea66f"/>
  <line x1="8" y1="8" x2="8" y2="392" stroke="currentColor" stroke-width="0.6"/>
  <line x1="8" y1="392" x2="392" y2="392" stroke="currentColor" stroke-width="0.6"/>
</svg>
</div>

The picture is a **Sierpinski triangle**: three half-size copies of the whole, with a hole in the middle, each copy
made of three quarter-size copies, and so on. (Wacław Sierpiński described the fractal in 1915.) The question is
why. The answer is a theorem about $\binom{n}{k}$ modulo any prime, found by Édouard Lucas in 1878.

We work with remainders. Write $a \equiv b \pmod p$ when $p$ divides $a - b$ ("$a$ is congruent to $b$ modulo $p$";
see [Number theory, chapter 4](../number-theory/04-Congruences.md)). For polynomials, $A(x) \equiv B(x) \pmod p$
means that each coefficient of $A$ is congruent to the matching coefficient of $B$. Sums and products of congruent
polynomials are congruent, because each coefficient of a product is a sum of products of coefficients.

**Lemma 3.4.** If $p$ is prime and $0 < k < p$, then $p$ divides $\binom{p}{k}$.

*Proof.* $\binom{p}{k}\, k!\, (p-k)! = p!$, and $p$ divides the right side. A prime that divides a product divides
one of the factors; $p$ does not divide $k!$ or $(p-k)!$, which are products of numbers smaller than $p$. So $p$
divides $\binom{p}{k}$. $\square$

**Corollary 3.5 ("the freshman's dream").** $(1 + x)^p \equiv 1 + x^p \pmod p$, and more generally
$(1 + x)^{p^i} \equiv 1 + x^{p^i} \pmod p$ for every $i \ge 0$.

*Proof.* The first is the binomial theorem plus Lemma 3.4: every middle coefficient is a multiple of $p$. For the
second, use induction on $i$: $(1 + x)^{p^{i+1}} = \bigl((1+x)^{p^i}\bigr)^p \equiv (1 + x^{p^i})^p \equiv 1 + x^{p^{i+1}}$,
the last step being the first statement with $x^{p^i}$ in place of $x$. $\square$

(Setting $x = a$, a whole number, and using induction on $a$ gives Fermat's little theorem $a^p \equiv a \pmod p$;
that is Exercise 11, and it connects this section with
[Number theory, chapter 5](../number-theory/05-Fermat-Euler-and-Wilson.md).)

**Theorem 3.6 (Lucas, 1878).** Let $p$ be prime. Write $n$ and $k$ in base $p$:
$n = n_r p^r + \dots + n_1 p + n_0$ and $k = k_r p^r + \dots + k_1 p + k_0$, with digits $0 \le n_i, k_i \le p - 1$.
Then

$$
\binom{n}{k} \equiv \binom{n_r}{k_r} \binom{n_{r-1}}{k_{r-1}} \cdots \binom{n_0}{k_0} \pmod p ,
$$

where $\binom{a}{b} = 0$ if $b > a$.

*Proof.* By Corollary 3.5,

$$
(1 + x)^n = \prod_{i=0}^{r} \bigl((1 + x)^{p^i}\bigr)^{n_i} \equiv \prod_{i=0}^{r} \bigl(1 + x^{p^i}\bigr)^{n_i} \pmod p .
$$

The coefficient of $x^k$ on the left is $\binom{n}{k}$. On the right, expand each factor by the binomial theorem:

$$
\prod_{i=0}^{r} \sum_{j_i = 0}^{n_i} \binom{n_i}{j_i} x^{j_i p^i} .
$$

A term of the product picks one $j_i$ from each factor and gives $x^{j_0 + j_1 p + \dots + j_r p^r}$, with every
$0 \le j_i \le n_i \le p - 1$. Because a number has only one base-$p$ representation with digits from 0 to $p - 1$,
the exponent equals $k$ only for the single choice $j_i = k_i$ for all $i$, and that choice exists only if every
$k_i \le n_i$. So the coefficient of $x^k$ on the right is $\prod_i \binom{n_i}{k_i}$, which is 0 if some
$k_i > n_i$. Congruent polynomials have congruent coefficients. $\square$

**Worked example 1.** $\binom{1000}{300} \bmod 7$. In base 7, $1000 = 2 \cdot 343 + 6 \cdot 49 + 2 \cdot 7 + 6$, so
$1000 = (2626)_7$, and $300 = 6 \cdot 49 + 0 \cdot 7 + 6 = (0606)_7$. By Lucas,

$$
\binom{1000}{300} \equiv \binom{2}{0}\binom{6}{6}\binom{2}{0}\binom{6}{6} = 1 \pmod 7 .
$$

The number $\binom{1000}{300}$ has 264 digits, and we found its remainder mod 7 in four small steps. Check:
`math.comb(1000, 300) % 7` is 1.

**Worked example 2.** $\binom{30}{15} \bmod 5$: $30 = (110)_5$ and $15 = (030)_5$. The middle digits give
$\binom{1}{3} = 0$, so 5 divides $\binom{30}{15}$. (Indeed $\binom{30}{15} = 155\,117\,520$.)

**The case $p = 2$.** Binary digits are 0 or 1, and $\binom{0}{0} = \binom{1}{0} = \binom{1}{1} = 1$ while
$\binom{0}{1} = 0$. So Lucas' theorem says:

> $\binom{n}{k}$ is odd exactly when every binary digit 1 of $k$ sits in a place where $n$ also has a 1.

For example $100 = (1100100)_2$ and $30 = (0011110)_2$: $30$ has a 1 where 100 has a 0, so $\binom{100}{30}$ is even.
In programming terms, $\binom{n}{k}$ is odd exactly when `n & k == k`.

**Counting the odd entries.** If $n$ has $s$ binary digits equal to 1, the $k$ that give odd $\binom{n}{k}$ are
those whose 1s are a sub-selection of these $s$ places: $2^s$ of them. So **row $n$ has $2^{s(n)}$ odd entries**,
where $s(n)$ is the number of 1s in the binary form of $n$. Row 100 has $2^3 = 8$ odd entries. Adding over the rows
$0$ to $2^m - 1$, which are all the $m$-digit binary strings,

$$
\sum_{n=0}^{2^m - 1} 2^{s(n)} = (1 + 2)^m = 3^m ,
$$

by the binomial theorem (choose which of the $m$ digits are 1, and each contributes a factor 2). Rows 0 to 31 contain
$3^5 = 243$ odd entries out of $1 + 2 + \dots + 32 = 528$. As $m$ grows the fraction $3^m / (2^{m-1}(2^m+1))$ tends
to 0 like $(3/4)^m$: almost all entries of Pascal's triangle are even.

**Why the Sierpinski shape.** Rows $2^m$ to $2^{m+1} - 1$ have a 1 in binary place $m$, and Lucas splits each
$\binom{n}{k}$ there into $\binom{1}{k_m}$ times a coefficient from the rows above. If $k_m = 0$ we get a copy of the
top block (rows 0 to $2^m - 1$) on the left; if $k_m = 1$, another copy on the right; and the entries in between,
where $k$ has bits that $n$ lacks, are even. So each doubling of the picture places two copies of the old picture
under it, leaving a triangular hole. That is exactly how a Sierpinski triangle is built.

**Kummer's theorem.** Ernst Kummer proved in 1852 a sharper statement: the exact power of a prime $p$ dividing
$\binom{m+n}{m}$ equals the **number of carries** when $m$ and $n$ are added in base $p$. For example $15 + 15$ in
base 5 is $(030)_5 + (030)_5$, which carries once (3 + 3 = 6 = 1 carry 1), so exactly one factor of 5 divides
$\binom{30}{15}$; indeed $155\,117\,520 = 5 \cdot 31\,023\,504$, and the second factor is not a multiple of 5. The
proof uses Legendre's formula for the power of $p$ in $n!$, which is in
[Number theory, chapter 13](../number-theory/13-How-Primes-Are-Spread.md#132-chebyshevs-bounds).

## 3.6 Stirling's approximation

*Level: advanced.*

**A question.** How many digits does $1000!$ have? Roughly how large is $\binom{100}{50}$?

Computers answer such questions exactly, but we want to understand the size: how fast does $n!$ grow, and what does
that say about the binomial coefficients built from it? The answer is one of the most useful formulas in
mathematics.

**Theorem 3.7 (Stirling's formula).** As $n \to \infty$,

$$
n! \sim \sqrt{2 \pi n} \left( \frac{n}{e} \right)^{n} ,
$$

where $a_n \sim b_n$ means that $a_n / b_n \to 1$. More precisely, $n! = \sqrt{2\pi n}\,(n/e)^n\, e^{\theta_n / (12n)}$
for some $\theta_n$ between 0 and 1.

The approximation is astonishingly good, even for small $n$:

| $n$ | $n!$ | $\sqrt{2\pi n}\,(n/e)^n$ | ratio | $1 + \frac{1}{12n}$ |
|---|---|---|---|---|
| 1 | 1 | 0.922 | 1.0844 | 1.0833 |
| 5 | 120 | 118.02 | 1.0168 | 1.0167 |
| 10 | 3 628 800 | 3 598 696 | 1.0084 | 1.0083 |
| 20 | $2.4329 \times 10^{18}$ | $2.4228 \times 10^{18}$ | 1.0042 | 1.0042 |
| 100 | $9.3326 \times 10^{157}$ | $9.3248 \times 10^{157}$ | 1.0008 | 1.0008 |

The relative error is about $\frac{1}{12n}$, as the last column shows. Abraham de Moivre found the form
$C\sqrt{n}\,(n/e)^n$ around 1730, with a constant $C$ he computed numerically; James Stirling showed in his
*Methodus Differentialis* (1730) that $C = \sqrt{2\pi}$.

**What we can prove here: bounds.** The full theorem needs more analysis than this chapter assumes. But two simple
bounds, which are often all one needs, have short complete proofs.

**Theorem 3.8.** For every $n \ge 1$,

$$
\left( \frac{n}{e} \right)^{n} \le n! \le e\, n \left( \frac{n}{e} \right)^{n} .
$$

*Proof of the lower bound.* The exponential series $e^x = \sum_{j \ge 0} x^j / j!$ has only positive terms when
$x > 0$, so it is larger than any one of them. Taking $x = n$ and the term $j = n$: $e^n \ge n^n / n!$, which
rearranges to $n! \ge n^n / e^n$. $\square$

*Proof of the upper bound.* Take logarithms: $\ln n! = \ln 2 + \ln 3 + \dots + \ln n$. Since $\ln$ is increasing,
$\ln k \le \int_k^{k+1} \ln x \, dx$ for each $k$. Adding for $k = 1, \dots, n-1$,

$$
\ln 1 + \dots + \ln(n-1) \le \int_1^n \ln x \, dx = \Bigl[ x \ln x - x \Bigr]_1^n = n \ln n - n + 1 .
$$

Adding $\ln n$ to both sides: $\ln n! \le n \ln n - n + 1 + \ln n$. Exponentiating gives
$n! \le e \cdot n \cdot n^n e^{-n}$. $\square$

So $\ln n! = n \ln n - n + O(\ln n)$, where $O(\ln n)$ means "at most a constant times $\ln n$". That is already
enough for most purposes: the leading behaviour of $n!$ is $(n/e)^n$, and Stirling's formula pins down the remaining
factor $\sqrt{2\pi n}$, which lies between the bounds' factors $1$ and $e n$.

**Where $\sqrt{2\pi n}$ comes from (a sketch).** Comparing the sum $\ln 1 + \dots + \ln n$ with the integral more
carefully, by the trapezoid rule, shows that $\ln n! - (n + \tfrac12)\ln n + n$ converges to a constant $c$; so
$n! \sim e^c \sqrt{n}\,(n/e)^n$. The constant is found from Wallis' product
$\frac{\pi}{2} = \frac{2 \cdot 2}{1 \cdot 3} \cdot \frac{4 \cdot 4}{3 \cdot 5} \cdot \frac{6 \cdot 6}{5 \cdot 7} \cdots$,
which forces $e^c = \sqrt{2\pi}$. Complete proofs are in Feller's probability text (Volume 1, Chapter II.9) and in
most analysis courses; the analysis behind it is in the U of T guide
[MAT137 Unit 10, Applications of the integral](../../uoft/MAT137/unit10.md).

**Sizes.**

- **Digits of $1000!$.** $\log_{10} 1000! \approx \tfrac12 \log_{10}(2000\pi) + 1000 \log_{10}(1000/e) \approx 2567.60$.
  So $1000!$ has $2568$ digits. (The exact value of $\log_{10} 1000!$ is $2567.6046\ldots$.)
- **A shuffled deck.** $52! \approx \sqrt{104\pi}\,(52/e)^{52} \approx 8.05 \times 10^{67}$, within 0.2% of the true
  $8.07 \times 10^{67}$.
- **The middle binomial coefficient.** Put Stirling into $\binom{2n}{n} = \frac{(2n)!}{(n!)^2}$:

$$
\binom{2n}{n} \sim \frac{\sqrt{4\pi n}\,(2n/e)^{2n}}{2\pi n\,(n/e)^{2n}} = \frac{4^n}{\sqrt{\pi n}} .
$$

For $n = 50$: $\binom{100}{50} = 100\,891\,344\,545\,564\,193\,334\,812\,497\,256 \approx 1.009 \times 10^{29}$, and
$4^{50}/\sqrt{50\pi} \approx 1.011 \times 10^{29}$. The middle entry of row $2n$ is a fraction about
$1/\sqrt{\pi n}$ of the whole row sum $4^n$. In probability language: tossing $2n$ fair coins, the chance of exactly
$n$ heads is about $1/\sqrt{\pi n}$, which is 8% for 100 tosses.

**An elementary bound for the middle.** Without Stirling, $\frac{4^n}{2n + 1} \le \binom{2n}{n} \le 4^n$. *Proof:*
row $2n$ has $2n + 1$ entries adding to $4^n$, and the middle one is the largest (§3.1), so it is at least the
average $4^n/(2n+1)$ and at most the total. $\square$ Paul Erdős used bounds of exactly this kind in his proof of
Bertrand's postulate ([Number theory, chapter 13](../number-theory/13-How-Primes-Are-Spread.md#133-bertrands-postulate)).

**Entropy.** *Level: expert (this paragraph only).* For a fixed fraction $0 < \alpha < 1$, Stirling gives
$\ln \binom{n}{\alpha n} = n H(\alpha) + O(\ln n)$, where $H(\alpha) = -\alpha \ln \alpha - (1 - \alpha)\ln(1 - \alpha)$
is the (natural-log) **entropy** function. So the number of $n$-bit strings with a fraction $\alpha$ of ones grows like
$e^{n H(\alpha)}$, and is largest at $\alpha = \tfrac12$, where $e^{H} = 2$. For $n = 100$, $\alpha = \tfrac14$:
$\ln\binom{100}{25} \approx 53.8$, while $100 H(\tfrac14) \approx 56.2$; the gap is the $O(\ln n)$ term. This
estimate is the bridge from counting to information theory, and it returns in the error-correcting codes of
[Chapter 19](19-Designs-and-Codes.md).

## Check yourself

??? question "1. Expand $(x + 2)^5$, and find the coefficient of $x^4$ in $(2x - 1)^7$."

    $(x + 2)^5 = \sum_k \binom{5}{k} x^k 2^{5-k} = x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32$. In $(2x - 1)^7$ the
    $x^4$ term is $\binom{7}{4}(2x)^4(-1)^3 = 35 \cdot 16 \cdot (-1)\,x^4$, so the coefficient is $-560$.

??? question "2. Without a calculator, find $\binom{10}{0} + \binom{10}{2} + \binom{10}{4} + \dots + \binom{10}{10}$."

    The full row sum is $2^{10} = 1024$, and the alternating sum is 0, so the even-position entries and the
    odd-position entries are equal, each half of 1024. The answer is 512.

??? question "3. Use Pascal's rule to compute row 8 of Pascal's triangle from row 7 ($1, 7, 21, 35, 35, 21, 7, 1$). Check that it sums to $2^8$."

    Adding neighbours: $1, 8, 28, 56, 70, 56, 28, 8, 1$. The sum is $256 = 2^8$.

??? question "4. Prove by counting that $\sum_{k=0}^{n} k \binom{n}{k} = n 2^{n-1}$. Then find $\sum_{k=0}^{n} k(k-1) \binom{n}{k}$ the same way."

    Both sides count pairs (subset, marked element of it): choose the subset first and mark one of its $k$
    elements, or choose the marked element first ($n$ ways) and then any subset of the other $n - 1$ elements to
    go with it ($2^{n-1}$ ways). For the second sum, count (subset, ordered pair of different marked elements):
    choosing the two marks first gives $n(n-1)$ ways and then $2^{n-2}$ subsets of the rest, so the sum is
    $n(n-1)2^{n-2}$. Check for $n = 4$: $0 + 0 + 2 \cdot 6 + 6 \cdot 4 + 12 \cdot 1 = 48 = 12 \cdot 4$.

??? question "5. Use the hockey stick identity to find $1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 + \dots + 9 \cdot 10$."

    $j(j+1) = 2\binom{j+1}{2}$, so the sum is $2\left(\binom{2}{2} + \binom{3}{2} + \dots + \binom{10}{2}\right) = 2\binom{11}{3} = 2 \cdot 165 = 330$.
    Check: $2 + 6 + 12 + 20 + 30 + 42 + 56 + 72 + 90 = 330$.

??? question "6. Find the coefficient of $x^2 y^3 z$ in $(x + y + z)^6$, and of $x^2 y^3 z$ in $(x + 2y - z)^6$."

    The multinomial coefficient is $\frac{6!}{2!\,3!\,1!} = 60$. In the second, each $y$ brings a factor 2 and the
    $z$ a factor $-1$: $60 \cdot 2^3 \cdot (-1) = -480$.

??? question "7. In how many ways can 12 students be split into three unnamed groups of 4? Into named groups of sizes 5, 4 and 3?"

    Named groups of 4: $\frac{12!}{4!\,4!\,4!} = 34\,650$; the three groups are interchangeable, so divide by $3!$:
    $5775$. Named groups of sizes 5, 4, 3: $\frac{12!}{5!\,4!\,3!} = 27\,720$, with no division, since the sizes tell
    the groups apart.

??? question "8. Use Lucas' theorem to decide whether $\binom{100}{30}$ is odd, and to find $\binom{1000}{300} \bmod 7$."

    $100 = (1100100)_2$ and $30 = (0011110)_2$; $30$ has a 1 in the $2^1$ place where 100 has a 0, so the
    product contains $\binom{0}{1} = 0$, and $\binom{100}{30}$ is even. In base 7, $1000 = (2626)_7$ and
    $300 = (0606)_7$, so $\binom{1000}{300} \equiv \binom{2}{0}\binom{6}{6}\binom{2}{0}\binom{6}{6} = 1 \pmod 7$.

??? question "9. How many odd numbers are in row 100 of Pascal's triangle? In row $2^m$? In row $2^m - 1$?"

    $100 = (1100100)_2$ has three 1s, so $2^3 = 8$ odd entries. $2^m$ has a single 1 in binary, so only 2 odd
    entries (the two 1s at the ends: all middle entries of row $2^m$ are even). $2^m - 1$ is $m$ ones in binary,
    so every $k \le n$ qualifies and all $2^m$ entries of that row are odd.

??? question "10. Use Stirling's formula to estimate the number of digits of $100!$ and the size of $\binom{20}{10}$."

    $\log_{10} 100! \approx \tfrac12\log_{10}(200\pi) + 100\log_{10}(100/e) \approx 1.399 + 156.571 = 157.97$, so
    $100!$ has 158 digits (it is $9.33 \times 10^{157}$). $\binom{20}{10} \approx 4^{10}/\sqrt{10\pi} \approx 1\,048\,576 / 5.605 \approx 187\,079$;
    the exact value is $184\,756$, within about 1.3%.

??? question "11. Use Corollary 3.5 to prove Fermat's little theorem: if $p$ is prime then $a^p \equiv a \pmod p$ for every whole number $a \ge 0$."

    By induction on $a$. For $a = 0$ it is clear. If $a^p \equiv a$, then by the binomial theorem and Lemma 3.4,
    $(a + 1)^p = a^p + \sum_{0 < k < p} \binom{p}{k} a^k + 1 \equiv a^p + 1 \equiv a + 1 \pmod p$, since every middle
    coefficient is a multiple of $p$. So the statement passes from $a$ to $a + 1$. (Number theory, chapter 5 gives
    two other proofs.)

??? question "12. Prove that for a prime $p$ and $0 < k < p^m$, $p$ divides $\binom{p^m}{k}$. Then show that every entry of row $2^m$ of Pascal's triangle except the two end 1s is even."

    In base $p$, $p^m = (10\cdots0)_p$, a 1 followed by $m$ zeros. If $0 < k < p^m$, then $k$ has $m$ base-$p$
    digits (or fewer) and at least one of them, $k_i$ with $i < m$, is non-zero. Lucas gives a factor
    $\binom{0}{k_i} = 0$, so $\binom{p^m}{k} \equiv 0 \pmod p$. With $p = 2$ this says the middle entries of row
    $2^m$ are even. In the picture, these are the rows where the triangle is empty all the way across except for
    its two corners.

## What you learned

- Pascal's rule $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ builds the triangle by addition; its proof sorts
  subsets by whether they contain one special element.
- The binomial theorem $(x + y)^n = \sum_k \binom{n}{k} x^k y^{n-k}$ is a counting statement: choose which brackets
  give $x$. Newton extended it to any exponent as an infinite series, and with negative exponents it gives stars and
  bars.
- Combinatorial proofs find a set that both sides count: the committee chair, Vandermonde, the sum of squares
  $\sum \binom{n}{k}^2 = \binom{2n}{n}$, and the hockey stick.
- The multinomial coefficient $\frac{n!}{k_1! \cdots k_m!}$ counts words, splittings and deals, and gives the
  coefficients of $(x_1 + \dots + x_m)^n$.
- Lucas' theorem computes $\binom{n}{k} \bmod p$ digit by digit in base $p$. Mod 2 it makes Pascal's triangle a
  Sierpinski triangle, with $2^{s(n)}$ odd entries in row $n$.
- Stirling's formula $n! \sim \sqrt{2\pi n}\,(n/e)^n$ is accurate to about $1/(12n)$; the bounds
  $(n/e)^n \le n! \le en(n/e)^n$ have two-line proofs, and $\binom{2n}{n} \sim 4^n/\sqrt{\pi n}$.

**Next:** [Chapter 4](04-The-Pigeonhole-Principle.md) turns from "how many" to "must there be": the pigeonhole
principle and its surprising consequences, up to a first theorem of Ramsey theory.

## Further reading

- Arthur T. Benjamin and Jennifer J. Quinn, *Proofs That Really Count: The Art of Combinatorial Proof* (2003),
  Chapters 1 to 5.
- Ronald L. Graham, Donald E. Knuth and Oren Patashnik, *Concrete Mathematics* (2nd edition, 1994), Chapter 5,
  "Binomial coefficients", and Chapter 9 for Stirling's formula.
- A. W. F. Edwards, *Pascal's Arithmetical Triangle: The Story of a Mathematical Idea* (1987; reissued 2002). The
  history, carefully told.
- Édouard Lucas, "Théorie des fonctions numériques simplement périodiques", *American Journal of Mathematics* 1
  (1878), where his theorem appears.
- Andrew Granville, "Arithmetic properties of binomial coefficients I: Binomial coefficients modulo prime powers",
  in *Organic Mathematics* (CMS Conference Proceedings 20, 1997). Lucas, Kummer and beyond.
- William Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1 (3rd edition, 1968),
  Section II.9 for a proof of Stirling's formula.
- On this site: the Topics lessons [The binomial theorem](../../topics/counting/level-7/02-binomial-theorem.md),
  [Identities from the theorem](../../topics/counting/level-7/03-identities-from-theorem.md),
  [Patterns in Pascal's triangle](../../topics/counting/level-7/04-pascal-patterns.md) and
  [Multinomial coefficients](../../topics/counting/level-7/06-multinomial-coefficients.md);
  [Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for the induction proof of the binomial
  theorem; [Number theory, chapter 5](../number-theory/05-Fermat-Euler-and-Wilson.md) for Fermat's little theorem;
  the U of T guide [MAT137 Unit 14, Power series and Taylor series](../../uoft/MAT137/unit14.md) for Newton's series.
