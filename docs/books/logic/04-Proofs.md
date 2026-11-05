# 4. Proofs

*How can you be sure something is true for every whole number, when there are infinitely many and you can only check
a few? Checking examples can build confidence, and it can also mislead: there are patterns that hold for the first
forty cases, or the first billion, and then fail. Mathematics settles such questions with proofs. This chapter is a
working toolkit: what a proof is, the five methods that cover most of mathematics (direct proof, contrapositive,
contradiction, cases and induction), how a single counterexample destroys a false claim, and how to write a proof
that another person can read and check. Along the way you will prove two theorems that are more than two thousand
years old: $\sqrt 2$ is irrational, and the primes never run out.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a proof is, why examples are not enough, and the parts of a mathematical text (definition, theorem, lemma)
    - direct proof, proof by contrapositive and proof by contradiction, each with classic examples
    - proof by cases, including a famous non-constructive proof
    - induction in its weak and strong forms, the well-ordering principle, and a proof that the three are equivalent
    - how to find and use counterexamples, with some celebrated ones from history
    - how to write a proof well, and how to spot a bad one

    **You need:** [Chapter 1](01-Statements-and-Truth.md) to [Chapter 3](03-Quantifiers.md): the conditional and its
    contrapositive, De Morgan's laws, and how quantifiers shape a proof (section 3.2). School algebra. For a gentler
    version, see the Topics lessons [What a proof is](../../topics/logic/level-7/01-what-a-proof-is.md),
    [Direct proof](../../topics/logic/level-7/02-direct-proof.md),
    [Proof by contrapositive](../../topics/logic/level-7/03-proof-by-contrapositive.md),
    [Proof by contradiction](../../topics/logic/level-7/04-proof-by-contradiction.md) and
    [Counterexamples and cases](../../topics/logic/level-7/05-counterexamples-cases.md).

    **Levels:** 4.1, 4.2 and 4.6 are beginner; 4.3, 4.4 and 4.7 are intermediate; 4.5 is intermediate, with the
    equivalence proofs at the end advanced.

## 4.1 What a proof is

Mark $n$ points on a circle and join every pair by a straight line, choosing the points so that no three lines meet
at one point inside. How many regions does the disc fall into?

| points $n$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| regions | 1 | 2 | 4 | 8 | 16 | 31 |

The first five values are $1, 2, 4, 8, 16$, and anyone would guess the next is 32. It is 31. (The exact count is
$\binom{n}{4} + \binom{n}{2} + 1$, which gives $15 + 15 + 1 = 31$ for $n = 6$; the problem is known as Moser's
circle problem.) A pattern is a guess, not a fact.

A **proof** is an argument that establishes a statement beyond doubt, by a finite chain of steps, each of which is

- an **axiom** (a statement accepted as a starting point),
- a **definition**,
- a result proved earlier, or
- a consequence of earlier steps by a valid rule of logic (such as modus ponens, from Chapter 2).

In practice, proofs in mathematics books do not list every logical step; they are written for a reader who can fill
in routine steps. But every step must be fillable. [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md) defines
a fully formal proof, every step a rule application, and [Chapter 19](19-Other-Logics.md) describes the computer
programs (proof assistants) that check such proofs. The everyday proofs of this chapter are written so that a careful
reader could, with patience, expand them into formal ones.

### Definitions do the work

Most proofs at this level start by unpacking definitions. We will use these throughout the chapter; $\mathbb{Z}$ is
the set of integers $\{\dots, -2, -1, 0, 1, 2, \dots\}$.

- An integer $n$ is **even** if $n = 2k$ for some integer $k$, and **odd** if $n = 2k + 1$ for some integer $k$.
  (Every integer is exactly one of these; [Number theory, chapter 1](../number-theory/01-Divisibility.md) proves it
  from the division algorithm.)
- For integers $a, b$, **$a$ divides $b$**, written $a \mid b$, if $b = ak$ for some integer $k$.
- An integer $p > 1$ is **prime** if its only positive divisors are 1 and $p$.
- A real number $x$ is **rational** if $x = a/b$ for some integers $a, b$ with $b \ne 0$, and **irrational**
  otherwise.

### The vocabulary

A **theorem** is an important proved statement. A **lemma** is a smaller result proved as a step towards a theorem.
A **corollary** is a result that follows quickly from a theorem. A **conjecture** is a statement believed but not
proved (Goldbach's conjecture from Chapter 1 is one). A proof traditionally ends with the sign $\blacksquare$ or the
letters QED, for the Latin *quod erat demonstrandum*, "which was to be shown".

## 4.2 Direct proof

To prove $P \to Q$ **directly**: assume $P$, and reason forward until you reach $Q$. If the statement begins "for all
$n$", let $n$ be arbitrary first (section 3.2).

**Theorem 4.1.** The sum of two odd integers is even.

*Proof.* Let $m$ and $n$ be odd integers. By definition $m = 2a + 1$ and $n = 2b + 1$ for some integers $a, b$. Then

$$
m + n = 2a + 2b + 2 = 2(a + b + 1),
$$

and $a + b + 1$ is an integer, so $m + n$ is even. $\blacksquare$

Notice two details. We used *different* letters $a$ and $b$: writing $m = 2k + 1$ and $n = 2k + 1$ would wrongly
assume $m = n$ (Trap 4 of Chapter 3). And we ended by matching the definition of "even" exactly: $2 \times$ (an
integer).

**Theorem 4.2.** If $a \mid b$ and $b \mid c$, then $a \mid c$.

*Proof.* By definition, $b = ak$ and $c = b\ell$ for some integers $k, \ell$. Then $c = (ak)\ell = a(k\ell)$, and
$k\ell$ is an integer, so $a \mid c$. $\blacksquare$

### Scratch work backward, proof forward

Often you find a proof by working backward from what you want, and then write it forward. Here is the classic
example.

**Theorem 4.3 (AM-GM for two numbers).** For all real $x, y \ge 0$, $\dfrac{x + y}{2} \ge \sqrt{xy}$.

*Scratch work (not a proof).* We want $\frac{x + y}{2} \ge \sqrt{xy}$. Multiply by 2: $x + y \ge 2\sqrt{xy}$. Move
terms: $x - 2\sqrt{xy} + y \ge 0$. That is $(\sqrt x - \sqrt y)^2 \ge 0$, which is true because squares are never
negative.

This scratch work goes from the goal to something true, and that proves nothing by itself (section 4.7 shows a
"proof" of a falsehood done this way). But each step here can be reversed, so we can write the proof forward:

*Proof.* Let $x, y \ge 0$, so $\sqrt x$ and $\sqrt y$ are real. Squares of real numbers are nonnegative, so

$$
0 \le (\sqrt x - \sqrt y)^2 = x - 2\sqrt{xy} + y .
$$

Adding $2\sqrt{xy}$ to both sides and dividing by 2 gives $\sqrt{xy} \le \frac{x + y}{2}$. $\blacksquare$

**Check:** $x = 4$, $y = 9$: $\frac{13}{2} = 6.5 \ge \sqrt{36} = 6$. Equality holds exactly when $\sqrt x = \sqrt y$,
that is, $x = y$.

## 4.3 Contrapositive and contradiction
*Level: intermediate.*

### Proof by contrapositive

Sometimes the hypothesis $P$ gives you little to work with, while $\neg Q$ gives a lot. Since $P \to Q$ is equivalent
to its contrapositive $\neg Q \to \neg P$ (Chapter 2), you may prove that instead.

**Theorem 4.4.** For every integer $n$: if $n^2$ is even, then $n$ is even.

A direct proof would start from $n^2 = 2k$ and get stuck: how do you get from $n^2$ to $n$? The contrapositive is
"if $n$ is not even (so odd), then $n^2$ is not even (so odd)", which starts from something we can write down.

*Proof.* We prove the contrapositive. Suppose $n$ is odd, so $n = 2k + 1$ for an integer $k$. Then

$$
n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1,
$$

which is odd. So if $n$ is odd then $n^2$ is odd, and therefore if $n^2$ is even then $n$ is even. $\blacksquare$

**Theorem 4.5.** For real numbers $x, y$: if $xy$ is irrational, then $x$ is irrational or $y$ is irrational.

*Proof.* The contrapositive, by De Morgan, is: if $x$ and $y$ are both rational, then $xy$ is rational. Suppose
$x = a/b$ and $y = c/d$ with integers $a, b, c, d$ and $b, d \ne 0$. Then $xy = (ac)/(bd)$ with $bd \ne 0$, which is
rational. $\blacksquare$

### Proof by contradiction

To prove $Q$ **by contradiction**: assume $\neg Q$, and derive something impossible, a statement of the form
$R \wedge \neg R$. Since a true assumption cannot lead by valid steps to a falsehood, $\neg Q$ must be false, so $Q$
is true. (In the language of Chapter 2: $\neg Q \to (R \wedge \neg R)$ is equivalent to $Q$. Check the two rows: if
$Q$ is T, the conditional has a false hypothesis and is T; if $Q$ is F, it is T $\to$ F, which is F.)

**Theorem 4.6.** $\sqrt 2$ is irrational.

*Proof.* Suppose, for contradiction, that $\sqrt 2$ is rational. Then $\sqrt 2 = a/b$ for some integers $a, b$ with
$b \ne 0$, and we may take the fraction **in lowest terms**: $a$ and $b$ have no common factor greater than 1.
(Dividing top and bottom by their greatest common divisor achieves this.)

Squaring, $2 = a^2 / b^2$, so $a^2 = 2b^2$. Thus $a^2$ is even, and by Theorem 4.4, $a$ is even: $a = 2c$ for some
integer $c$. Substituting, $4c^2 = 2b^2$, so $b^2 = 2c^2$. Thus $b^2$ is even, and by Theorem 4.4 again, $b$ is
even.

So $a$ and $b$ are both even: 2 is a common factor. This contradicts the choice of $a/b$ in lowest terms. So
$\sqrt 2$ is not rational. $\blacksquare$

The proof is from the Pythagorean school of ancient Greece (5th century BC); a version appears in later manuscripts
of Euclid's *Elements*, and Aristotle refers to it. Stories about who discovered it and what happened to him are
legends, not history. The discovery mattered: it showed that the length of a square's diagonal is not a ratio of
whole numbers, so "number" in the Greek sense could not measure every length. The real numbers that fix this are
built in [Calculus, chapter 18](../calculus/18-The-Real-Numbers.md).

**Theorem 4.7 (Euclid).** There are infinitely many primes.

We need one fact first.

**Lemma 4.8.** Every integer $n > 1$ has a prime divisor.

*Proof.* Among all divisors of $n$ that are greater than 1 (there is at least one, $n$ itself), take the smallest,
$d$. If $d$ were not prime, it would have a divisor $e$ with $1 < e < d$; then $e \mid d$ and $d \mid n$, so $e \mid n$
by Theorem 4.2, and $e$ would be a smaller divisor of $n$ greater than 1. That contradicts the choice of $d$. So $d$
is prime. $\blacksquare$

(The step "take the smallest" uses the well-ordering principle of section 4.5.)

*Proof of Theorem 4.7.* Suppose, for contradiction, that there are only finitely many primes, $p_1, p_2, \dots,
p_k$. Let

$$
N = p_1 p_2 \cdots p_k + 1 .
$$

Then $N > 1$, so by Lemma 4.8 it has a prime divisor $p$, which must be one of the $p_i$. Now $p$ divides
$p_1 p_2 \cdots p_k$ and $p$ divides $N$, so $p$ divides their difference, $N - p_1 \cdots p_k = 1$. But no prime
divides 1. This contradiction shows there are infinitely many primes. $\blacksquare$

**An honest remark.** Euclid (*Elements*, Book IX, Proposition 20, about 300 BC) did not argue by contradiction in
this way. He proved directly: *given any finite list of primes, there is a prime not on the list* (namely any prime
divisor of $N$). That is the same mathematics, and the direct form is slightly better, because it does not ask you to
imagine a false world. Notice too what the proof does *not* say: it does not say $N$ is prime. For the first six
primes, $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$, which is not prime, but its
prime divisors 59 and 509 are indeed new. [Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md)
gives several other proofs.

### Choosing between them

- If the hypothesis is concrete and useful, try a **direct** proof.
- If the conclusion's *negation* is concrete (as "$n$ is odd" is, compared with "$n^2$ is even"), try the
  **contrapositive**.
- If the statement says something does *not* exist, or is *not* rational, or is *infinite* (that is, not finite),
  try **contradiction**: negating it gives you an object to work with.

A proof by contradiction that, unpacked, only ever contradicts the hypothesis $P$ is really a proof by contrapositive,
and is clearer written that way.

## 4.4 Proof by cases
*Level: intermediate.*

If the hypothesis splits into cases that between them cover every possibility, it is enough to prove the conclusion
in each case. This is the valid form "proof by cases" from Chapter 2: from $p \vee q$, $p \to r$ and $q \to r$,
conclude $r$.

**Theorem 4.9.** For every integer $n$, $n^2 + n$ is even.

*Proof.* Every integer is even or odd.

- *Case 1: $n$ even*, $n = 2k$. Then $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, even.
- *Case 2: $n$ odd*, $n = 2k + 1$. Then $n^2 + n = (4k^2 + 4k + 1) + (2k + 1) = 2(2k^2 + 3k + 1)$, even.

In both cases $n^2 + n$ is even. $\blacksquare$

(A slicker proof: $n^2 + n = n(n + 1)$, and of two consecutive integers one is even. That is still a proof by cases,
just a shorter one.)

**Theorem 4.10 (triangle inequality).** For all real $x, y$: $|x + y| \le |x| + |y|$.

Recall $|x| = x$ if $x \ge 0$ and $|x| = -x$ if $x < 0$. So $-|x| \le x \le |x|$ always.

*Proof.* Adding $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$ gives $-(|x| + |y|) \le x + y \le |x| + |y|$.
Now two cases.

- *Case 1: $x + y \ge 0$.* Then $|x + y| = x + y \le |x| + |y|$.
- *Case 2: $x + y < 0$.* Then $|x + y| = -(x + y) \le |x| + |y|$, by the left inequality.

$\blacksquare$

**Theorem 4.11.** For every integer $n$, $6 \mid n^3 - n$.

*Proof.* Write $n^3 - n = (n - 1)n(n + 1)$, a product of three consecutive integers. Among any two consecutive
integers one is even, so $2 \mid n^3 - n$. For divisibility by 3, split $n$ by its remainder on division by 3:
$n = 3k$, $n = 3k + 1$ or $n = 3k + 2$. In the first case $3 \mid n$; in the second $3 \mid n - 1$; in the third
$n + 1 = 3(k + 1)$, so $3 \mid n + 1$. Either way 3 divides the product. Since $2 \mid n^3 - n$ and $3 \mid n^3 - n$
and 2 and 3 have no common factor, $6 \mid n^3 - n$. $\blacksquare$

**Check:** $n = 5$: $125 - 5 = 120 = 6 \cdot 20$. $n = -4$: $-64 + 4 = -60 = 6 \cdot (-10)$.

(The last step, "divisible by 2 and by 3 implies divisible by 6", needs a fact about primes proved in
[Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md): if a prime divides a product, it
divides a factor. From $n^3 - n = 2m$ and $3 \mid 2m$ we get $3 \mid m$, so $n^3 - n = 6 \cdot (m/3)$.)

### "Without loss of generality"

When cases are symmetric, we do one and say the others are the same. In the triangle inequality we could have said:
"swapping the roles of $x$ and $y$ changes nothing, so **without loss of generality** (WLOG) $|x| \ge |y|$." Use this
only when the symmetry is genuine, and say what it is.

### A non-constructive proof

**Theorem 4.12.** There exist irrational numbers $a$ and $b$ such that $a^b$ is rational.

*Proof.* Consider $x = \sqrt 2^{\sqrt 2}$. It is either rational or irrational.

- *Case 1: $x$ is rational.* Take $a = b = \sqrt 2$, both irrational by Theorem 4.6. Then $a^b = x$ is rational.
- *Case 2: $x$ is irrational.* Take $a = x$ and $b = \sqrt 2$. Then
  $a^b = \left(\sqrt 2^{\sqrt 2}\right)^{\sqrt 2} = \sqrt 2^{\sqrt 2 \cdot \sqrt 2} = \sqrt 2^{2} = 2$, rational.

Either way such $a, b$ exist. $\blacksquare$

This proof is perfectly valid, yet it does not tell you which pair works. It is **non-constructive**: it proves
existence without exhibiting a witness. (In fact $\sqrt 2^{\sqrt 2}$ is irrational, even transcendental, by the
Gelfond-Schneider theorem of 1934, so Case 2 is the true one; but that is a much deeper result.) Some
mathematicians, the intuitionists, reject proofs like this because they use the law of excluded middle ("$x$ is
rational or not") on a question nobody has decided. Their logic is described in [Chapter 19](19-Other-Logics.md).
Exercise 12 gives a constructive proof of the same theorem.

## 4.5 Induction
*Level: intermediate.*

A row of dominoes stands on end. You know two things: the first one falls, and whenever one falls it knocks over the
next. Then every domino falls. That is the whole idea of induction.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="A row of seven dominoes labelled P of 0 to P of 6; the first two are tipping over to the right and the rest are standing">
  <line x1="20" y1="120" x2="420" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="40" width="14" height="80" fill="#eea66f" stroke="currentColor" transform="rotate(35 54 120)"/>
  <rect x="90" y="40" width="14" height="80" fill="#eea66f" stroke="currentColor" transform="rotate(15 104 120)"/>
  <rect x="140" y="40" width="14" height="80" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="190" y="40" width="14" height="80" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="240" y="40" width="14" height="80" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="290" y="40" width="14" height="80" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="340" y="40" width="14" height="80" fill="#9cc9ea" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="47" y="140">P(0)</text>
    <text x="97" y="140">P(1)</text>
    <text x="147" y="140">P(2)</text>
    <text x="197" y="140">P(3)</text>
    <text x="247" y="140">P(4)</text>
    <text x="297" y="140">P(5)</text>
    <text x="347" y="140">P(6)</text>
    <text x="395" y="84">…</text>
    <text x="220" y="162">base case: P(0) falls; step: if P(k) falls, so does P(k+1)</text>
  </g>
</svg>
</div>

### Weak induction

Let $\mathbb{N} = \{0, 1, 2, \dots\}$.

**Principle of mathematical induction.** Let $P(n)$ be a predicate on $\mathbb{N}$. If

1. (**base case**) $P(0)$ is true, and
2. (**inductive step**) for every $k \in \mathbb{N}$, $P(k) \to P(k + 1)$,

then $P(n)$ is true for every $n \in \mathbb{N}$.

In the step, the assumption $P(k)$ is called the **inductive hypothesis**. You are *not* assuming what you want to
prove: you are proving a conditional, "if it holds for $k$, it holds for $k + 1$", for an arbitrary $k$. The base
case can start at any integer $n_0$ instead of 0; the conclusion is then "for all $n \ge n_0$".

**Theorem 4.13.** For every $n \ge 1$, $1 + 2 + \dots + n = \dfrac{n(n + 1)}{2}$.

*Proof.* By induction on $n$. Let $P(n)$ be the statement of the theorem.

*Base case,* $n = 1$: the left side is 1 and the right side is $1 \cdot 2 / 2 = 1$.

*Inductive step.* Let $k \ge 1$ and assume $P(k)$: $1 + \dots + k = k(k + 1)/2$. Then

$$
1 + \dots + k + (k + 1) = \frac{k(k + 1)}{2} + (k + 1) = \frac{k(k + 1) + 2(k + 1)}{2} = \frac{(k + 1)(k + 2)}{2},
$$

which is $P(k + 1)$. By induction, $P(n)$ holds for all $n \ge 1$. $\blacksquare$

**Check:** $n = 100$: $100 \cdot 101 / 2 = 5050$.

**Theorem 4.14.** For every $n \ge 5$, $2^n > n^2$.

*Proof.* *Base case,* $n = 5$: $32 > 25$.

*Inductive step.* Let $k \ge 5$ and assume $2^k > k^2$. Then $2^{k+1} = 2 \cdot 2^k > 2k^2$. We want this to be at
least $(k + 1)^2 = k^2 + 2k + 1$, that is, $k^2 \ge 2k + 1$. Since $k \ge 5$, $k^2 \ge 5k = 2k + 3k \ge 2k + 15 >
2k + 1$. So $2^{k+1} > 2k^2 = k^2 + k^2 > k^2 + 2k + 1 = (k + 1)^2$. $\blacksquare$

Why start at 5? Because the statement is false at $n = 2, 3, 4$ ($4 = 4$, $8 < 9$, $16 = 16$). The base case is not
a formality.

**Theorem 4.15.** For every $n \in \mathbb{N}$, $3 \mid 4^n - 1$.

*Proof.* *Base case:* $4^0 - 1 = 0 = 3 \cdot 0$. *Step:* assume $4^k - 1 = 3m$. Then
$4^{k+1} - 1 = 4 \cdot 4^k - 1 = 4(3m + 1) - 1 = 12m + 3 = 3(4m + 1)$. $\blacksquare$

### Strong induction

Sometimes the step from $k$ to $k + 1$ needs not just $P(k)$ but some earlier case.

**Principle of strong induction.** If, for every $n \in \mathbb{N}$, the truth of $P(k)$ for all $k < n$ implies
$P(n)$, then $P(n)$ is true for every $n \in \mathbb{N}$.

In symbols: $\forall n\, \big[(\forall k < n\; P(k)) \to P(n)\big]$ implies $\forall n\, P(n)$. There is no separate
base case: for $n = 0$ the hypothesis "$P(k)$ for all $k < 0$" is vacuously true, so the condition requires
proving $P(0)$ outright. In practice one still writes the small cases separately.

**Theorem 4.16.** Every integer $n \ge 2$ is a product of primes. (A prime itself counts as a product of one prime.)

*Proof.* By strong induction. Let $n \ge 2$, and assume every $k$ with $2 \le k < n$ is a product of primes. If $n$
is prime, we are done. If not, $n = ab$ with $1 < a, b < n$. By the hypothesis, $a$ and $b$ are products of primes,
so $n = ab$ is too. $\blacksquare$

Weak induction would be useless here: knowing that $n - 1$ is a product of primes says nothing about $n$. That every
$n \ge 2$ factors in only *one* way is the fundamental theorem of arithmetic, proved in
[Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md).

**Theorem 4.17.** Every amount of postage of 12 cents or more can be made with 4-cent and 5-cent stamps.

*Proof.* By strong induction on $n \ge 12$. The cases $12 = 4 + 4 + 4$, $13 = 4 + 4 + 5$, $14 = 4 + 5 + 5$ and
$15 = 5 + 5 + 5$ are checked directly. For $n \ge 16$, the amount $n - 4 \ge 12$ can be made by the hypothesis; add
one 4-cent stamp. $\blacksquare$

(11 cents cannot be made: $11$ is not $4a + 5b$ for any $a, b \ge 0$. So 12 is the right starting point.)

**Theorem 4.18.** The Fibonacci numbers $F_0 = 0$, $F_1 = 1$, $F_{n} = F_{n-1} + F_{n-2}$ satisfy $F_n < 2^n$ for
every $n \in \mathbb{N}$.

*Proof.* $F_0 = 0 < 1$ and $F_1 = 1 < 2$. For $n \ge 2$, assuming the claim for all smaller indices,
$F_n = F_{n-1} + F_{n-2} < 2^{n-1} + 2^{n-2} < 2^{n-1} + 2^{n-1} = 2^n$. $\blacksquare$

Here two base cases are needed, because the step uses two earlier values.

### A famous bad induction

"All horses are the same colour." *"Proof"*: by induction on the number $n$ of horses in a set. One horse is the same
colour as itself. Given $n + 1$ horses, remove one: the remaining $n$ are the same colour by hypothesis. Put it back
and remove another: those $n$ are also the same colour. The two groups overlap, so all $n + 1$ share a colour.

The joke, usually credited to George Pólya, fails at exactly one step: from $n = 1$ to $n = 2$. With two horses, the
two groups of one horse each do not overlap, so nothing links their colours. An inductive step must work for *every*
$k$ from the base case on, and this one fails for $k = 1$.

### The well-ordering principle
*Level: advanced.*

**Well-ordering principle.** Every nonempty set of natural numbers has a least element.

This sounds obvious, and for $\mathbb{N}$ it is the right intuition; but it fails for $\mathbb{Z}$ (no least
negative integer) and for the positive reals (no least positive real). We used it in Lemma 4.8 ("take the smallest
divisor") and in the proof that $\sqrt 2$ is irrational ("take the fraction in lowest terms", which can be done by
taking the smallest possible denominator).

**Theorem 4.19.** The following three principles are equivalent: each can be proved from either of the others.

- (I) weak induction;
- (S) strong induction;
- (W) the well-ordering principle.

The proofs use only basic facts about $\mathbb{N}$: every $n \ne 0$ is $m + 1$ for some $m \in \mathbb{N}$, and
there is no natural number strictly between $m$ and $m + 1$. (So "equivalent" means: equivalent given those basic
facts. [Chapter 17](17-Arithmetic-and-Peano.md) makes the setting exact with the Peano axioms.)

*Proof that (W) implies (I).* Assume (W). Let $P$ satisfy the base case and the inductive step, and suppose, for
contradiction, that $P(n)$ fails for some $n$. Then the set $S = \{n \in \mathbb{N} : P(n) \text{ is false}\}$ is
nonempty, so by (W) it has a least element $m$. Since $P(0)$ is true, $m \ne 0$, so $m = j + 1$ for some
$j \in \mathbb{N}$. As $j < m$ and $m$ is least in $S$, $j \notin S$: $P(j)$ is true. By the inductive step, $P(j +
1) = P(m)$ is true, contradicting $m \in S$. So $P(n)$ holds for all $n$.

*Proof that (I) implies (S).* Assume (I). Let $P$ satisfy the hypothesis of (S): for every $n$, if $P(k)$ for all
$k < n$ then $P(n)$. Define a new predicate

$$
Q(n): \quad P(k) \text{ is true for every } k \le n .
$$

We prove $\forall n\, Q(n)$ by weak induction. *Base:* the hypothesis of (S) with $n = 0$ has a vacuous "if" part,
so $P(0)$ holds; that is $Q(0)$. *Step:* assume $Q(j)$, so $P(k)$ for every $k \le j$, which is every $k < j + 1$.
By the hypothesis of (S), $P(j + 1)$ holds. Together with $Q(j)$ this gives $Q(j + 1)$. So $Q(n)$ for all $n$, and in
particular $P(n)$ for all $n$.

*Proof that (S) implies (W).* Assume (S). Let $S \subseteq \mathbb{N}$ have no least element; we show $S$ is
empty, which is the contrapositive of (W). Let $P(n)$ be "$n \notin S$". Fix $n$ and suppose $P(k)$ for all $k <
n$, that is, no number below $n$ is in $S$. If $n$ were in $S$, it would be the least element of $S$, which does not
exist. So $n \notin S$: $P(n)$ holds. By (S), $P(n)$ for all $n$, so $S$ is empty.

The three implications (W) $\to$ (I) $\to$ (S) $\to$ (W) form a cycle, so each principle implies the other two.
$\blacksquare$

<figure class="play" data-play="seq" data-kind="tri"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The triangular numbers 1, 3, 6, 10, …: each adds the next whole number, and induction proves the nth is n(n + 1)/2.</figcaption></figure>

## 4.6 Counterexamples

A statement "for all $x$, $P(x)$" is destroyed by a single $x$ with $P(x)$ false (section 3.2). No number of
confirming examples can prove it, and one counterexample disproves it. History has some striking ones.

**Euler's prime polynomial.** The polynomial $n^2 + n + 41$ gives primes for $n = 0, 1, 2, \dots, 39$: $41, 43, 47,
53, 61, \dots, 1601$. Is it always prime? No: at $n = 40$ it gives $1600 + 40 + 41 = 1681 = 41^2$. (And at $n = 41$
it gives $41 \cdot 43$, obviously divisible by 41.) Forty confirmations, then failure.

**Fermat numbers.** Pierre de Fermat believed that every number $F_n = 2^{2^n} + 1$ is prime. $F_0, \dots, F_4 = 3,
5, 17, 257, 65537$ are. But in 1732 Leonhard Euler found $F_5 = 2^{32} + 1 = 4294967297 = 641 \cdot 6700417$.
No further Fermat prime has ever been found.

**Goldbach's other conjecture.** In 1752 Christian Goldbach suggested to Euler that every odd composite number is a
prime plus twice a square: $9 = 7 + 2 \cdot 1^2$, $15 = 7 + 2 \cdot 2^2$, $33 = 31 + 2 \cdot 1^2$, and so on. In 1856
Moritz Stern and his students found the counterexamples $5777$ and $5993$, and no others are known.

**Euler's sum of powers conjecture.** Euler conjectured in 1769 that a fifth power cannot be a sum of fewer than five
fifth powers (and similarly for higher powers: a $k$th power needs at least $k$ $k$th powers). It stood for nearly
two hundred years, until L. J. Lander and T. R. Parkin found by computer search, in 1966,

$$
27^5 + 84^5 + 110^5 + 133^5 = 144^5 .
$$

For fourth powers Noam Elkies found a counterexample in 1988, $2682440^4 + 15365639^4 + 18796760^4 = 20615673^4$,
and Roger Frye then found the smallest, $95800^4 + 217519^4 + 414560^4 = 422481^4$.

**Try it in Python.** All of these are quick to check, and that is how a counterexample should be: anyone can verify
it.

```python
print(40**2 + 40 + 41 == 41**2)                            # True
print(2**32 + 1 == 641 * 6700417)                          # True
print(27**5 + 84**5 + 110**5 + 133**5 == 144**5)           # True
print(95800**4 + 217519**4 + 414560**4 == 422481**4)       # True
```

### Counterexamples to converses and to hidden assumptions

Often the job is to show that a converse fails, or that a hypothesis is needed.

- "If $f$ is differentiable at $a$, then $f$ is continuous at $a$" is true. Its converse is false: $f(x) = |x|$ is
  continuous at 0 but has a corner there.
- "If $a \mid bc$ then $a \mid b$ or $a \mid c$" is false: $6 \mid 2 \cdot 3$, but $6 \nmid 2$ and $6 \nmid 3$. It
  becomes true when $a$ is prime, which is why primes matter.
- "If $x^2 = y^2$ then $x = y$" is false over $\mathbb{R}$ ($1$ and $-1$), true for $x, y \ge 0$.

A good counterexample is as simple as possible, fully specified, and checked.

## 4.7 Writing proofs well
*Level: intermediate.*

A proof is written for a reader. The goal is that a careful reader, who knows the definitions but not your idea,
can follow every step and be convinced.

### Rules of thumb

1. **Say what you are proving and how.** "We prove the contrapositive." "Suppose, for contradiction, that ..."
   "We use induction on $n$."
2. **Introduce every letter.** "Let $n$ be an odd integer. Then $n = 2k + 1$ for some integer $k$." Never use a
   letter the reader has not been told about.
3. **Use the definitions exactly.** If the conclusion is "$m$ is even", the last line should show $m = 2 \cdot
   (\text{integer})$.
4. **Write sentences.** Symbols are abbreviations for words. "$\Rightarrow$" between unrelated lines is not a sentence.
   Words like "so", "hence", "because", "since" show the reader how each line follows from the last.
5. **Go forward.** Start from what you know and end at what you want. If you found the proof by working backward,
   rewrite it.
6. **Mark the end.** A $\blacksquare$, or "this completes the proof".

### Two bad proofs

**Bad proof 1 (working backward).** "Claim: $1 = -1$. *Proof:* squaring both sides gives $1 = 1$, which is true." The
argument shows "if $1 = -1$ then $1 = 1$", a true conditional with a false hypothesis. It proves nothing about
$1 = -1$. Working backward from the goal to a true statement is only valid if every step can be reversed, and squaring
cannot be: $a^2 = b^2$ does not imply $a = b$.

**Bad proof 2 (hidden division by zero).** "Let $a = b$. Then $a^2 = ab$, so $a^2 - b^2 = ab - b^2$, so $(a + b)(a -
b) = b(a - b)$. Dividing by $a - b$: $a + b = b$. With $a = b = 1$: $2 = 1$." Every step is fine except the division,
by $a - b = 0$. Dividing by an expression silently assumes it is nonzero, and a good proof says so.

### A rewrite

Here is a first attempt at a proof, and a better version.

> *First attempt.* $n$ odd $\Rightarrow$ $n = 2k + 1$ $\Rightarrow$ $n^2 = 4k^2 + 4k + 1$ $\Rightarrow$ odd. So $n^2$
> odd. Contrapositive. Done.

The mathematics is right, but the reader must guess what is being proved, what $k$ is, and why $4k^2 + 4k + 1$ is
odd.

> *Better.* **Claim.** For every integer $n$, if $n^2$ is even then $n$ is even. **Proof.** We prove the
> contrapositive: if $n$ is odd then $n^2$ is odd. Let $n$ be odd; then $n = 2k + 1$ for some integer $k$. Hence
> $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. Since $2k^2 + 2k$ is an integer, $n^2$ is odd. $\blacksquare$

### When you are stuck

Write down the definitions of every term in the statement. Try small cases. Try the contrapositive. Ask what the
statement would look like if it were false (the negation), and whether that gives you an object to work with. Look
for a similar theorem you already know. George Pólya's *How to Solve It* (1945) is still the best short guide to
this stage.

## A short history thread

The idea of a deductive proof from stated assumptions is Greek. **Euclid**'s *Elements* (about 300 BC) proves 465
propositions from a small list of definitions, postulates and common notions, and was the model of rigour for two
thousand years. Proof by contradiction (*reductio ad absurdum*) is used throughout it.

Induction arrived slowly. Arguments that step from each case to the next appear in the work of **al-Karaji** (around
1000) on sums of cubes, and an explicit statement of the method is in **Francesco Maurolico**'s *Arithmeticorum libri
duo* (1575). **Blaise Pascal** used it clearly in his *Traité du triangle arithmétique* (written 1654, published
1665). The name "mathematical induction" was given by **Augustus De Morgan** in 1838. **Richard Dedekind** (1888) and
**Giuseppe Peano** (1889) made induction an axiom about the natural numbers, which is how
[Chapter 17](17-Arithmetic-and-Peano.md) treats it.

The question "what exactly is a proof?" became a mathematical question itself around 1900, when contradictions in
set theory ([Chapter 5](05-Sets.md)) made mathematicians worry about their foundations. Its answers, formal proof
systems ([Chapter 9](09-Proof-Systems-for-Propositional-Logic.md)), Gödel's theorems
([Chapter 18](18-Godels-Incompleteness-Theorems.md)) and computer-checked proofs
([Chapter 19](19-Other-Logics.md)), are the rest of this book.

## Check yourself

??? question "1. Prove directly: the product of two odd integers is odd."

    Let $m = 2a + 1$ and $n = 2b + 1$ with $a, b$ integers. Then $mn = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, and
    $2ab + a + b$ is an integer, so $mn$ is odd. $\blacksquare$

??? question "2. Prove: for every integer $n$, if $3 \mid n^2$ then $3 \mid n$."

    Contrapositive: if $3 \nmid n$ then $3 \nmid n^2$. If $3 \nmid n$, then $n = 3k + 1$ or $n = 3k + 2$. In the
    first case $n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$; in the second $n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) +
    1$. Either way $n^2$ leaves remainder 1 on division by 3, so $3 \nmid n^2$. $\blacksquare$

??? question "3. Prove that $\sqrt 3$ is irrational."

    Suppose $\sqrt 3 = a/b$ in lowest terms. Then $a^2 = 3b^2$, so $3 \mid a^2$, so $3 \mid a$ by question 2. Write
    $a = 3c$: $9c^2 = 3b^2$, so $b^2 = 3c^2$, so $3 \mid b^2$ and $3 \mid b$. Then 3 divides both $a$ and $b$,
    contradicting lowest terms. $\blacksquare$ (The same proof fails for $\sqrt 4$ at the step "$3 \mid a^2$ implies
    $3 \mid a$", whose analogue "$4 \mid a^2$ implies $4 \mid a$" is false: $a = 2$.)

??? question "4. Prove that $\log_2 3$ is irrational."

    Suppose $\log_2 3 = a/b$ with positive integers $a, b$ (it is positive since $3 > 1$). Then $2^{a/b} = 3$, so
    $2^a = 3^b$. The left side is even (as $a \ge 1$) and the right side is odd. Contradiction. $\blacksquare$

??? question "5. Prove by cases that every perfect square leaves remainder 0 or 1 on division by 4. Deduce that no integer of the form $4m + 3$ is a sum of two squares."

    If $n = 2k$, $n^2 = 4k^2$, remainder 0. If $n = 2k + 1$, $n^2 = 4(k^2 + k) + 1$, remainder 1. A sum of two
    squares therefore leaves remainder $0 + 0$, $0 + 1$ or $1 + 1$, that is 0, 1 or 2, never 3. *Check:* 3, 7, 11
    are not sums of two squares; $2 = 1 + 1$, $5 = 4 + 1$.

??? question "6. Prove by induction: $1^3 + 2^3 + \dots + n^3 = \left(\dfrac{n(n + 1)}{2}\right)^2$ for $n \ge 1$."

    Base: $1 = (1 \cdot 2/2)^2 = 1$. Step: assume it for $k$. Then the sum to $k + 1$ is
    $\frac{k^2(k + 1)^2}{4} + (k + 1)^3 = \frac{(k + 1)^2 (k^2 + 4k + 4)}{4} = \frac{(k + 1)^2 (k + 2)^2}{4}$, which
    is the formula for $k + 1$. $\blacksquare$ *Check:* $n = 3$: $1 + 8 + 27 = 36 = 6^2$.

??? question "7. Prove by strong induction that every positive integer is a sum of distinct powers of 2."

    For $n = 1 = 2^0$ it holds. Let $n \ge 2$ and assume it for all smaller positive integers. Let $2^m$ be the
    largest power of 2 with $2^m \le n$, so $n < 2^{m+1}$. If $n = 2^m$ we are done. Otherwise $r = n - 2^m$
    satisfies $0 < r < 2^m$, and $r < n$, so $r$ is a sum of distinct powers of 2, each at most $r < 2^m$. Adding
    $2^m$ gives $n$ as a sum of distinct powers of 2 (none repeats $2^m$). $\blacksquare$ This is why every number
    has a binary representation.

??? question "8. Find the flaw: 'Claim: $n^2 + n$ is odd for all $n \ge 1$. Step: if $k^2 + k$ is odd then $(k + 1)^2 + (k + 1) = (k^2 + k) + 2(k + 1)$ is odd plus even, so odd.'"

    The step is correct, but there is no base case, and the base case is false: $1^2 + 1 = 2$ is even. In fact
    $n^2 + n$ is always even (Theorem 4.9). An inductive step alone proves nothing; it only shows that if the
    statement ever held, it would keep holding.

??? question "9. Disprove each with a counterexample: (a) every odd number greater than 1 is prime or a power of a prime; (b) if $n^2 - 1$ is divisible by 8 then $n$ is prime; (c) for all real $x$, $\sqrt{x^2} = x$."

    (a) $15 = 3 \cdot 5$. (b) $n = 9$: $80 = 8 \cdot 10$, but 9 is not prime (in fact $8 \mid n^2 - 1$ for every
    odd $n$). (c) $x = -1$: $\sqrt{1} = 1 \ne -1$. (The truth is $\sqrt{x^2} = |x|$.)

??? question "10. Let $S = \{n \in \mathbb{N} : n \ge 1 \text{ and } n\sqrt 2 \in \mathbb{N}\}$. Use the well-ordering principle on $S$ to give a second proof that $\sqrt 2$ is irrational."

    If $\sqrt 2 = a/b$ with positive integers, then $b \in S$, so $S$ is nonempty and has a least element $m$. Then
    $m\sqrt 2$ is a natural number. Let $m' = m\sqrt 2 - m = m(\sqrt 2 - 1)$. It is an integer, and since
    $1 < \sqrt 2 < 2$, we have $0 < m' < m$. Also $m'\sqrt 2 = 2m - m\sqrt 2$, an integer, and positive since
    $m' > 0$. So $m' \in S$ and $m' < m$, contradicting the minimality of $m$. $\blacksquare$

??? question "11. Prove that for every integer $n \ge 0$, $n^5 - n$ is divisible by 5."

    By induction. Base: $0 - 0 = 0$. Step: $(k + 1)^5 - (k + 1) = k^5 + 5k^4 + 10k^3 + 10k^2 + 5k + 1 - k - 1 =
    (k^5 - k) + 5(k^4 + 2k^3 + 2k^2 + k)$. The first bracket is divisible by 5 by hypothesis, the second plainly is.
    $\blacksquare$ (This is the case $p = 5$ of Fermat's little theorem;
    [Number theory, chapter 5](../number-theory/05-Fermat-Euler-and-Wilson.md).)

??? question "12. Give a constructive proof that there are irrationals $a, b$ with $a^b$ rational: take $a = \sqrt 2$ and $b = 2\log_2 3$."

    $b$ is irrational: if $2\log_2 3$ were rational, so would be $\log_2 3$, contradicting question 4. $a = \sqrt 2$
    is irrational. And $a^b = (2^{1/2})^{2\log_2 3} = 2^{\log_2 3} = 3$, which is rational. Unlike Theorem 4.12,
    this proof names the pair.

## What you learned

- A proof is a finite chain of steps from axioms, definitions and earlier results by valid rules; examples suggest,
  only proofs establish.
- A direct proof assumes the hypothesis and reasons forward; a proof by contrapositive proves $\neg Q \to \neg P$
  instead; a proof by contradiction derives an impossibility from $\neg Q$.
- $\sqrt 2$ is irrational and there are infinitely many primes; both proofs are over two thousand years old.
- Proof by cases needs cases that cover everything; a non-constructive proof can show existence without a witness.
- Weak induction, strong induction and well-ordering are equivalent principles about $\mathbb{N}$; the base case and
  a step valid for every $k$ are both essential.
- One counterexample refutes a universal claim, however many examples support it.
- Good proofs announce their method, introduce every letter, use definitions exactly and run forward.

**Next:** [Chapter 5](05-Sets.md) introduces sets, the language in which nearly all of mathematics is written, and the
paradox that showed the naive version of that language is inconsistent.

## Further reading

- Daniel J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019, chapters 3 and 6 (proofs and
  induction).
- Richard Hammack, *Book of Proof*, 3rd edition, 2018, chapters 4 to 10. Free online.
- George Pólya, *How to Solve It*, 1945, and *Induction and Analogy in Mathematics*, 1954.
- Kevin Houston, *How to Think Like a Mathematician*, 2009. Especially good on writing proofs.
- Martin Aigner and Günter M. Ziegler, *Proofs from THE BOOK*, 6th edition, 2018. Chapter 1 gives six proofs that
  there are infinitely many primes.
- Euclid, *Elements*, Book IX, Proposition 20; T. L. Heath's translation with commentary (1908).
- L. J. Lander and T. R. Parkin, "Counterexample to Euler's Conjecture on Sums of Like Powers", *Bulletin of the
  American Mathematical Society* 72, 1966.
- Noam D. Elkies, "On $A^4 + B^4 + C^4 = D^4$", *Mathematics of Computation* 51, 1988.
- On this site: the Topics lessons [What a proof is](../../topics/logic/level-7/01-what-a-proof-is.md),
  [Proof by contradiction](../../topics/logic/level-7/04-proof-by-contradiction.md) and
  [Axioms](../../topics/logic/level-8/02-axioms.md); the U of T guides
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md),
  [MAT158H1 Unit 1: Logic, Sets & Proof](../../uoft/MAT158H1/unit01.md) and
  [CSC148H1 Unit 5: Recursion](../../uoft/CSC148H1/unit05.md) (recursion is induction in code); the books
  [Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md) (induction),
  [Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md) (primes) and
  [Combinatorics, chapter 4](../combinatorics/04-The-Pigeonhole-Principle.md) (another proof technique).
