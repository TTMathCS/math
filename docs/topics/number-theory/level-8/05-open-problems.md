---
title: "Famous open problems"
---

# Famous open problems

*Number theory · level 8, lesson 5 of 6*

## A question to start

Write each even number from 4 upwards as the sum of two primes:

$$4 = 2 + 2, \quad 6 = 3 + 3, \quad 8 = 3 + 5, \quad 10 = 5 + 5, \quad 12 = 5 + 7, \quad 14 = 7 + 7, \quad 16 = 3 + 13.$$

It always seems to work. Computers have checked every even number up to $4 \times 10^{18}$ and never found one that
fails. Yet nobody in nearly 300 years has been able to prove that it **always** works.

Number theory is full of questions like this: a child can understand them, a computer can check millions of cases,
and the best mathematicians in the world cannot settle them. This lesson is a tour of the most famous ones, and of
one that was finally solved after more than 350 years.

## The idea

### What "open" means

A statement is **proved** when there is an argument, every step justified, that covers **every** case. A statement
that is believed but not proved is a **conjecture**. Checking examples, even $10^{18}$ of them, is evidence, but it is
not a proof: there are infinitely many cases left. History has many conjectures that held for enormous numbers of
cases and then failed (one famous example: guesses about $\pi(x)$ compared with $\operatorname{Li}(x)$ from lesson 4,
which hold for every $x$ ever computed and are still known to fail somewhere). An **open problem** is a conjecture
nobody has yet proved or disproved.

### Twin primes

**Twin primes** are two primes that differ by 2: 3 and 5, 5 and 7, 11 and 13, 17 and 19, 29 and 31, ... Below 75 they
look like this (twins joined by arcs):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 110" role="img" aria-label="A number line from 0 to 75 with the primes as dots. Twin primes are orange and joined by arcs: 3 and 5, 5 and 7, 11 and 13, 17 and 19, 29 and 31, 41 and 43, 59 and 61, 71 and 73">
  <line x1="10" y1="80" x2="310" y2="80" stroke="currentColor" stroke-width="1"/>
  <circle cx="22.6" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="26.4" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 26.4 76 Q 30.2 58 34.0 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="34.0" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 34.0 76 Q 37.8 58 41.6 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="41.6" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="56.8" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 56.8 76 Q 60.6 58 64.4 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="64.4" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="79.6" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 79.6 76 Q 83.4 58 87.2 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="87.2" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="102.4" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="125.2" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 125.2 76 Q 129.0 58 132.8 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="132.8" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="155.6" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="170.8" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 170.8 76 Q 174.60000000000002 58 178.4 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="178.4" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="193.6" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="216.4" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="239.2" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 239.2 76 Q 243.0 58 246.8 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="246.8" cy="80" r="3.5" fill="#eea66f"/>
  <circle cx="269.6" cy="80" r="3.5" fill="currentColor"/>
  <circle cx="284.8" cy="80" r="3.5" fill="#eea66f"/>
  <path d="M 284.8 76 Q 288.6 58 292.4 76" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="292.4" cy="80" r="3.5" fill="#eea66f"/>
  <text x="15.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="53.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="91.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <text x="129.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">30</text>
  <text x="167.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">40</text>
  <text x="205.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">50</text>
  <text x="243.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">60</text>
  <text x="281.0" y="100" font-size="10" text-anchor="middle" fill="currentColor">70</text>
</svg>
</div>

> **Twin prime conjecture.** There are infinitely many pairs of twin primes.

The prime number theorem (lesson 4) says the primes thin out, so twins should get rarer, but a simple probability
estimate suggests they never stop. In 2013 Yitang Zhang proved something close: there are infinitely many pairs of
primes that differ by **at most** 70 million. Within a year, work by James Maynard, Terence Tao and a large online
collaboration brought that bound down to 246. Getting from 246 to 2 is still open.

One thing **is** easy to prove: 3, 5, 7 is the only "prime triplet" of the form $p, p + 2, p + 4$. Among any three
numbers $p, p + 2, p + 4$ one is a multiple of 3 (they are $p$, $p + 2$ and $p + 1 + 3$, so mod 3 they are $p$,
$p + 2$, $p + 1$: all three remainders). So one of them **is** 3, which forces $p = 3$.

### Goldbach's conjecture

> **Goldbach's conjecture.** Every even number greater than 2 is the sum of two primes.

Christian Goldbach wrote a version of it in a letter to Euler in 1742. Bigger even numbers have more ways: 100 has six
($3 + 97$, $11 + 89$, $17 + 83$, $29 + 71$, $41 + 59$, $47 + 53$), and 2026 has 32. The number of ways grows on
average, which makes a counterexample seem very unlikely, but "unlikely" is not a proof.

Its little sister was finally proved. **Every odd number greater than 5 is the sum of three primes** (the "weak"
Goldbach conjecture): Harald Helfgott completed the proof in 2013, building on work by Ivan Vinogradov from the 1930s,
who had proved it for all large enough odd numbers. For example $35 = 3 + 13 + 19$. Notice that the strong form
implies the weak form: an odd $n > 5$ is $3 + (n - 3)$, and $n - 3$ is even and greater than 2.

### The Riemann hypothesis, in one honest paragraph

In 1859 Bernhard Riemann studied the function $\zeta(s) = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} +
\cdots$ (the Greek letter zeta), which Euler had already linked to the primes, and extended it to complex numbers $s$.
He showed that the exact count of primes $\pi(x)$ can be written using the places where $\zeta(s) = 0$, its
**zeros**: each zero adds a small wave to the smooth estimate of lesson 4. Riemann guessed that all the important
zeros lie on one straight line in the complex plane (the line where the real part of $s$ is $\tfrac12$). If he is
right, the waves are as small as they can possibly be, and the prime number theorem's error is roughly the size of
$\sqrt x$ (times a logarithm), which would make the primes as evenly spread as possible. More than ten trillion zeros
have been computed and all lie on the line. Nobody has a proof. It is one of the Clay Mathematics Institute's seven
Millennium Prize Problems, each with a prize of one million dollars, announced in 2000.

### Fermat's last theorem: solved

Around 1637, Pierre de Fermat wrote in the margin of his copy of Diophantus' *Arithmetica* that the equation

$$x^n + y^n = z^n$$

has **no** solutions in whole numbers $x, y, z \ge 1$ when $n \ge 3$, and that he had a truly marvellous proof which
the margin was too narrow to contain. For $n = 2$ there are infinitely many solutions: the Pythagorean triples of
level 7. For $n \ge 3$, none.

Nobody ever found Fermat's proof, and most mathematicians think he did not really have one for every $n$. Over three
centuries special cases were proved: $n = 4$ by Fermat himself, $n = 3$ by Euler, and many more. The full proof came
from Andrew Wiles, who announced it in 1993. A gap was found in the argument; Wiles, with Richard Taylor, repaired it
in 1994, and the proof was published in 1995. It uses some of the deepest mathematics of the 20th century (elliptic
curves and modular forms), and it runs to well over a hundred pages.

### A piece of it we can prove: $n = 4$

The case $n = 4$ uses only level 7 and a beautiful idea of Fermat's called **infinite descent**: if every solution
gives a **smaller** solution in whole numbers, there can be no solutions at all, because whole numbers cannot get
smaller forever.

**Claim.** $x^4 + y^4 = z^2$ has no solutions in whole numbers $x, y, z \ge 1$. (Then $x^4 + y^4 = z^4 = (z^2)^2$ has
none either.)

*Proof.* Suppose there were solutions, and take one with the smallest possible $z$. Then $x$ and $y$ are coprime (a
common prime $p$ would give $p^4$ dividing $z^2$, so $p^2$ divides $z$, and dividing $x, y$ by $p$ and $z$ by $p^2$
gives a smaller solution). So $(x^2)^2 + (y^2)^2 = z^2$ makes $x^2, y^2, z$ a **primitive Pythagorean triple**. Say
$x$ is odd. By the recipe of level 7, lesson 5, there are coprime $m > n$ of opposite parity with

$$x^2 = m^2 - n^2, \qquad y^2 = 2mn, \qquad z = m^2 + n^2.$$

The first equation says $x^2 + n^2 = m^2$: another primitive triple, with $x$ odd, so $n$ is the even leg. Apply the
recipe again: $x = r^2 - s^2$, $n = 2rs$, $m = r^2 + s^2$ with $r, s$ coprime. Then

$$y^2 = 2mn = 4rs(r^2 + s^2), \qquad \left(\frac y2\right)^2 = r \cdot s \cdot (r^2 + s^2).$$

The three numbers $r$, $s$, $r^2 + s^2$ share no prime factor in pairs (a prime dividing $r$ and $r^2 + s^2$ would
divide $s^2$, hence $s$). Their product is a square, so each is a square (as in level 7: each prime appears an even
number of times): $r = a^2$, $s = b^2$, $r^2 + s^2 = c^2$. So

$$a^4 + b^4 = c^2,$$

a new solution. And $c \le c^2 = m < m^2 + n^2 = z$. We found a solution with a smaller $c$ than the smallest $z$, a
contradiction. So there are no solutions. ∎

This also explains why the full theorem only needed $n = 4$ and odd primes $n = p$: every $n \ge 3$ is a multiple of
4 or of an odd prime, and if $n = 4k$ then a solution $x^n + y^n = z^n$ gives $(x^k)^4 + (y^k)^4 = (z^k)^4$; if
$n = pk$, it gives $(x^k)^p + (y^k)^p = (z^k)^p$.

### More open questions

- Are there infinitely many **Mersenne primes** $2^p - 1$ (level 4)? Only 52 were known by the end of 2024, the largest with more than 41 million digits.
- Is there an **odd perfect number** (level 4)? None is known, and none exists below $10^{1500}$.
- Is there always a prime between $n^2$ and $(n + 1)^2$ (**Legendre's conjecture**)? Checked far and wide, unproved.

## Worked examples

**1. Goldbach for 48.** Try each prime $p$ up to 24 and check whether $48 - p$ is prime: $48 - 5 = 43$, $48 - 7 = 41$,
$48 - 11 = 37$, $48 - 17 = 31$, $48 - 19 = 29$ all work; $48 - 2 = 46$, $48 - 3 = 45$, $48 - 13 = 35$, $48 - 23 = 25$
do not. So 48 has **5** Goldbach pairs.

**2. Twin primes live next to multiples of 6.** Every twin pair after (3, 5) has the form $6k - 1$, $6k + 1$. Reason:
among $p, p + 1, p + 2$ one is a multiple of 3, and it is not $p$ or $p + 2$ (they are primes bigger than 3), so it is
$p + 1$. Also $p + 1$ is even. So $p + 1$ is a multiple of 6. Check: 11, 13 around 12; 59, 61 around 60.

**3. Weak Goldbach for 21.** $21 = 3 + 5 + 13 = 3 + 7 + 11 = 7 + 7 + 7$, among others.

**4. Why counting examples is not a proof.** The polynomial $n^2 + n + 41$ gives primes for $n = 0, 1, 2, \ldots, 39$:
forty primes in a row (41, 43, 47, 53, ...). A careless guess would be "always prime". But at $n = 40$:
$40^2 + 40 + 41 = 1681 = 41^2$. Forty confirmations, then failure.

**5. The descent, in one line.** Fermat's descent shows that a solution of $x^4 + y^4 = z^2$ with some $z$ would give
one with a smaller $z$, then a smaller one, and so on: an endless decreasing list of whole numbers $z_1 > z_2 > z_3 >
\cdots \ge 1$. Such a list cannot exist, because a decreasing list of positive whole numbers has at most $z_1$ terms.

## Try it

1. Find all the ways to write 60 as a sum of two primes.
2. List the twin prime pairs below 100. How many are there?
3. Show that if $p$ and $p + 2$ are twin primes with $p > 3$, then $p(p + 2) + 1$ is a multiple of 36. (Hint:
   $p(p + 2) + 1 = (p + 1)^2$.)
4. Explain why "every even number above 2 is the sum of two primes" implies "every odd number above 5 is the sum of
   three primes".
5. Is $n^2 + n + 41$ prime for $n = 41$? Explain without a calculator.
6. Why does Fermat's last theorem for $n = 4$ also settle $n = 8$, $n = 12$ and $n = 100$?
7. Write 2026 as a sum of two primes in two different ways.

??? note "Answers"
    1. $60 = 7 + 53 = 13 + 47 = 17 + 43 = 19 + 41 = 23 + 37 = 29 + 31$: **6** ways.
    2. (3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73): **8** pairs.
    3. $p(p + 2) + 1 = p^2 + 2p + 1 = (p + 1)^2$. By worked example 2, $p + 1$ is a multiple of 6, so
       $(p + 1)^2$ is a multiple of 36. Example: $11 \times 13 + 1 = 144 = 12^2$. ✓
    4. Take an odd $n > 5$. Then $n - 3$ is even and greater than 2, so (if Goldbach holds) $n - 3 = p + q$ with $p, q$
       prime, and $n = 3 + p + q$.
    5. $41^2 + 41 + 41 = 41 \times (41 + 1 + 1) = 41 \times 43$. Not prime.
    6. Each is a multiple of 4: $n = 4k$. A solution of $x^{4k} + y^{4k} = z^{4k}$ would give $(x^k)^4 + (y^k)^4 =
       (z^k)^4$, a solution for $n = 4$, which does not exist.
    7. For example $2026 = 23 + 2003 = 29 + 1997$ (both 2003 and 1997 are prime; check by trial division up to 44).
       Others: $47 + 1979$, $53 + 1973$.

## Common mistake

**Treating many examples as a proof.** "It works for every number I tried" is how conjectures are born, not how they
are proved. Example 4 failed at its 41st case; some famous conjectures failed only at numbers with hundreds of digits.

**Saying Fermat proved his last theorem.** He claimed it; he proved the case $n = 4$. The theorem was proved by Wiles
(with Taylor's help on the repair) in 1994-95, using mathematics that did not exist in Fermat's time.

## Where it leads

- Previous: [How the primes are spread out](04-spread-of-primes.md) · Next: [Quadratic residues](06-quadratic-residues.md)
- [Level 8 page](index.md) · [Number theory topic page](../index.md) · Pythagorean triples, used in the descent:
  [Level 7, lesson 5](../level-7/05-pythagorean-triples.md) · Mersenne primes and perfect numbers:
  [Level 4](../level-4/index.md)
- Proof by contradiction and the well-ordering idea behind descent: [Logic](../../logic/index.md) and
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
- The zeta function is a series; when series like $\sum 1/n^s$ add up to a finite number is in
  [MAT137 Unit 13 (series)](../../../uoft/MAT137/unit13.md). Infinitely many of anything:
  [Infinity](../../infinity/index.md).
