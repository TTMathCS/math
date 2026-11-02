---
title: "The formal definition of a limit"
---

# The formal definition of a limit

*Infinity and strange math · level 8, lesson 1 of 7*

## A question to start

In level 5 you met limits in words: a sequence has limit $L$ if its terms "get as close as you like to $L$ and stay
there". Everyone agrees that $1, \tfrac12, \tfrac13, \tfrac14, \ldots$ has limit 0.

But "as close as you like" is slippery. Close enough for whom? And how could you ever **prove** that a sequence gets
close to 0 forever, when you can only check finitely many terms?

Here is a sharper version of the question. The sequence $0.9, 0.99, 0.999, \ldots$ gets closer and closer to $2$:
every term is nearer to 2 than the one before. Is 2 its limit? Of course not, the limit is 1. So "getting closer and
closer" is not the right definition. What is?

It took mathematicians well over a century after the invention of calculus to find the answer: a two-line definition,
polished in the mid-1800s by Karl Weierstrass and his students, building on Augustin-Louis Cauchy and Bernard Bolzano.
It is built from two Greek letters, $\varepsilon$ (epsilon) and $\delta$ (delta), and it turned the infinite into
something that can be handled with finite, checkable steps.

## The idea

### The limit of a sequence as a challenge game

Imagine a game between a **challenger** and a **prover**, about a sequence $a_1, a_2, a_3, \ldots$ and a number $L$.

1. The challenger picks a tolerance $\varepsilon > 0$, as small as they like: $0.1$, or $0.000001$.
2. The prover must answer with a position $N$ such that **every** term after position $N$ is within $\varepsilon$ of
   $L$.

If the prover can always answer, whatever $\varepsilon$ the challenger chooses, then $L$ is the limit. That is the
whole definition, written in symbols:

$$\lim_{n \to \infty} a_n = L \quad\text{means}\quad \text{for every } \varepsilon > 0 \text{ there is an } N
\text{ such that } |a_n - L| < \varepsilon \text{ for all } n > N.$$

Read $|a_n - L|$ as "the distance between $a_n$ and $L$". Each part does a job:

- "**for every** $\varepsilon > 0$" is "as close as you like": every tolerance, not just some;
- "**there is** an $N$" is "eventually": we may ignore any finite number of early terms;
- "**for all** $n > N$" is "and stays there": not just one term inside, but all of them from then on.

In a picture: draw a band from $L - \varepsilon$ to $L + \varepsilon$. Whatever the width of the band, from some point
$N$ on, all the terms are inside it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 210" role="img" aria-label="Terms of a sequence plotted against n, getting closer to L; a band from L minus epsilon to L plus epsilon is shaded, and every term after N lies inside the band">
  <rect x="40" y="75.0" width="300" height="30.0" fill="#9cc9ea" fill-opacity="0.5"/>
  <line x1="40" y1="90.0" x2="340" y2="90.0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="40" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <text x="34" y="94.0" font-size="12" text-anchor="end" fill="currentColor">L</text>
  <text x="34" y="79.0" font-size="11" text-anchor="end" fill="currentColor">L+ε</text>
  <text x="34" y="109.0" font-size="11" text-anchor="end" fill="currentColor">L−ε</text>
  <text x="340" y="196" font-size="12" text-anchor="end" fill="currentColor">n</text>
  <line x1="131" y1="180" x2="131" y2="20" stroke="#eea66f" stroke-width="2"/>
  <text x="131" y="196" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <circle cx="54" cy="180.0" r="3.5" fill="currentColor"/>
  <circle cx="68" cy="45.0" r="3.5" fill="currentColor"/>
  <circle cx="82" cy="120.0" r="3.5" fill="currentColor"/>
  <circle cx="96" cy="67.5" r="3.5" fill="currentColor"/>
  <circle cx="110" cy="108.0" r="3.5" fill="currentColor"/>
  <circle cx="124" cy="75.0" r="3.5" fill="currentColor"/>
  <circle cx="138" cy="102.9" r="3.5" fill="#7ccf9a"/>
  <circle cx="152" cy="78.8" r="3.5" fill="#7ccf9a"/>
  <circle cx="166" cy="100.0" r="3.5" fill="#7ccf9a"/>
  <circle cx="180" cy="81.0" r="3.5" fill="#7ccf9a"/>
  <circle cx="194" cy="98.2" r="3.5" fill="#7ccf9a"/>
  <circle cx="208" cy="82.5" r="3.5" fill="#7ccf9a"/>
  <circle cx="222" cy="96.9" r="3.5" fill="#7ccf9a"/>
  <circle cx="236" cy="83.6" r="3.5" fill="#7ccf9a"/>
  <circle cx="250" cy="96.0" r="3.5" fill="#7ccf9a"/>
  <circle cx="264" cy="84.4" r="3.5" fill="#7ccf9a"/>
  <circle cx="278" cy="95.3" r="3.5" fill="#7ccf9a"/>
  <circle cx="292" cy="85.0" r="3.5" fill="#7ccf9a"/>
  <circle cx="306" cy="94.7" r="3.5" fill="#7ccf9a"/>
  <circle cx="320" cy="85.5" r="3.5" fill="#7ccf9a"/>
</svg>
</div>

A smaller $\varepsilon$ (a thinner band) usually needs a larger $N$. That is fine: $N$ is allowed to depend on
$\varepsilon$.

Now the sequence $0.9, 0.99, 0.999, \ldots$ and the number 2: challenge with $\varepsilon = 0.5$. Every term is less
than 1, so its distance from 2 is more than 1, bigger than $0.5$. No $N$ works, so 2 is **not** the limit. Getting
closer is not enough; you must get **within every tolerance**.

### How a proof goes: work backwards, then write forwards

To prove $\lim a_n = L$ you must give a recipe for $N$ that works for **every** $\varepsilon$. The usual method:

1. **Scratch work.** Write $|a_n - L|$, simplify it, and ask: how large must $n$ be to make this less than
   $\varepsilon$? Solve for $n$.
2. **The proof.** Let $\varepsilon > 0$. Choose $N$ (the answer from the scratch work). Then show that every $n > N$
   gives $|a_n - L| < \varepsilon$.

For $a_n = \tfrac1n$ and $L = 0$: $|a_n - 0| = \tfrac1n$, and $\tfrac1n < \varepsilon$ exactly when $n >
\tfrac1\varepsilon$. So the proof is: given $\varepsilon > 0$, let $N = \tfrac1\varepsilon$. For every $n > N$,
$\tfrac1n < \tfrac1N = \varepsilon$. ∎

### Saying "no limit" precisely

To say that $L$ is **not** the limit, turn every "for every" into "there is" and the reverse (this is how negation
works in logic):

there **is** some $\varepsilon > 0$ such that **for every** $N$ there is an $n > N$ with $|a_n - L| \ge \varepsilon$.

In game terms: the challenger has one winning tolerance, and however late the prover starts, some term after it falls
outside the band.

### Limits of functions: $\varepsilon$ and $\delta$

For a function, $\lim_{x \to a} f(x) = L$ says that $f(x)$ is close to $L$ whenever $x$ is close to $a$. The game is
the same, except that "far along the sequence" becomes "close to $a$":

1. The challenger picks $\varepsilon > 0$, a tolerance around $L$ on the $y$-axis.
2. The prover answers with $\delta > 0$, a distance around $a$ on the $x$-axis, such that every $x$ within $\delta$ of
   $a$ (but not equal to $a$) has $f(x)$ within $\varepsilon$ of $L$.

$$\lim_{x \to a} f(x) = L \quad\text{means}\quad \text{for every } \varepsilon > 0 \text{ there is a } \delta > 0
\text{ such that } 0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon.$$

The condition $0 < |x - a|$ says that we never look at $x = a$ itself. The limit is about what $f$ does **near** $a$,
not at $a$; $f(a)$ may be different, or not even defined.

### The example: $\lim_{x \to 3} (2x + 1) = 7$

**Scratch work.** $|f(x) - 7| = |2x + 1 - 7| = |2x - 6| = 2|x - 3|$. We want $2|x - 3| < \varepsilon$, that is
$|x - 3| < \tfrac{\varepsilon}{2}$. So $\delta = \tfrac\varepsilon2$ should work.

**Proof.** Let $\varepsilon > 0$, and choose $\delta = \tfrac\varepsilon2$. If $0 < |x - 3| < \delta$, then

$$|(2x + 1) - 7| = 2|x - 3| < 2\delta = \varepsilon.$$

So for every $\varepsilon$ we have found a $\delta$ that works, and $\lim_{x \to 3}(2x + 1) = 7$. ∎

In the picture, $\varepsilon = 1$ and $\delta = 0.5$: over the orange strip $2.5 < x < 3.5$, the line stays inside the
blue band $6 < y < 8$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 230" role="img" aria-label="The line y equals 2x plus 1 near x equals 3. A horizontal band from 6 to 8 and a vertical band from 2.5 to 3.5 are shaded; the part of the line over the vertical band stays inside the horizontal band">
  <rect x="50.0" y="75" width="279.0" height="50" fill="#9cc9ea" fill-opacity="0.5"/>
  <rect x="140.0" y="10.0" width="90.0" height="190.0" fill="#eea66f" fill-opacity="0.35"/>
  <line x1="50.0" y1="200" x2="329.0" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50.0" y1="200" x2="50.0" y2="10.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50.0" y1="175" x2="329.0" y2="20.00000000000003" stroke="currentColor" stroke-width="2.5"/>
  <line x1="140.0" y1="125.0" x2="230.0" y2="75.0" stroke="#7ccf9a" stroke-width="5"/>
  <circle cx="185.0" cy="100" r="4" fill="currentColor"/>
  <line x1="185.0" y1="100" x2="185.0" y2="200" stroke="currentColor" stroke-dasharray="3 3"/>
  <text x="140.0" y="216" font-size="12" text-anchor="middle" fill="currentColor">3−δ</text>
  <text x="185.0" y="216" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="230.0" y="216" font-size="12" text-anchor="middle" fill="currentColor">3+δ</text>
  <text x="44.0" y="79" font-size="12" text-anchor="end" fill="currentColor">7+ε</text>
  <text x="44.0" y="104" font-size="12" text-anchor="end" fill="currentColor">7</text>
  <text x="44.0" y="129" font-size="12" text-anchor="end" fill="currentColor">7−ε</text>
  <text x="293.0" y="22.5" font-size="12" text-anchor="middle" fill="currentColor">y = 2x + 1</text>
</svg>
</div>

The line has slope 2, so it magnifies distances by 2. That is why $\delta$ is half of $\varepsilon$: the $x$-window
must be half the height of the $y$-window.

### Why bother?

With this definition, every statement about limits becomes something you can **prove**, with no talk of
"infinitely small" amounts or "the last term". The infinite process is replaced by a finite promise: "tell me your
$\varepsilon$, and I will tell you my $N$ (or $\delta$)". All of calculus, from derivatives to integrals to infinite
series, rests on it.

## Worked examples

**1. A number for $N$.** For $a_n = \tfrac1n$ and $\varepsilon = 0.01$, which $N$ works? $\tfrac1n < 0.01$ when
$n > 100$, so $N = 100$. Check: $a_{101} = \tfrac1{101} \approx 0.0099 < 0.01$. ✓

**2. Prove that $\lim \tfrac{3n}{n + 2} = 3$.** Scratch: $\left| \tfrac{3n}{n+2} - 3 \right| =
\left| \tfrac{3n - 3n - 6}{n + 2} \right| = \tfrac{6}{n + 2}$. This is less than $\varepsilon$ when
$n + 2 > \tfrac6\varepsilon$, that is $n > \tfrac6\varepsilon - 2$.

Proof: let $\varepsilon > 0$ and $N = \tfrac6\varepsilon$. For $n > N$, $n + 2 > n > \tfrac6\varepsilon$, so
$\left|\tfrac{3n}{n+2} - 3\right| = \tfrac6{n+2} < \varepsilon$. ∎ (Choosing a slightly bigger $N$ than needed is
fine; it keeps the proof tidy.)

**3. A sequence with no limit.** Show that $a_n = (-1)^n$ (that is $-1, 1, -1, 1, \ldots$) has no limit.

Suppose its limit were some $L$. Challenge with $\varepsilon = 1$. Consecutive terms are $-1$ and $1$, which are 2
apart. If both were within 1 of $L$, then by the triangle inequality $2 = |1 - (-1)| \le |1 - L| + |L - (-1)| < 1 + 1
= 2$, which is false. So after any $N$ there is always a term at distance at least 1 from $L$. No $L$ works.

**4. A $\delta$ for a given $\varepsilon$.** For $\lim_{x \to 3}(2x + 1) = 7$ with $\varepsilon = 0.1$: $\delta =
0.05$. Test $x = 3.04$: $f(x) = 7.08$, within $0.1$ of 7. ✓

**5. A curved function: $\lim_{x \to 3} x^2 = 9$.** Scratch: $|x^2 - 9| = |x - 3|\,|x + 3|$. The factor $|x + 3|$ is
not constant, so first keep $x$ near 3: if $|x - 3| < 1$, then $2 < x < 4$, so $|x + 3| < 7$. Then
$|x^2 - 9| < 7|x - 3|$, which is less than $\varepsilon$ if $|x - 3| < \tfrac\varepsilon7$.

Proof: let $\varepsilon > 0$ and $\delta = \min\left(1, \tfrac\varepsilon7\right)$, the smaller of the two. If
$0 < |x - 3| < \delta$, then $|x + 3| < 7$ (since $\delta \le 1$) and $|x - 3| < \tfrac\varepsilon7$, so
$|x^2 - 9| < 7 \cdot \tfrac\varepsilon7 = \varepsilon$. ∎

**6. The value at $a$ does not matter.** $f(x) = \dfrac{x^2 - 9}{x - 3}$ is not defined at $x = 3$. For $x \ne 3$ it
equals $x + 3$, so $|f(x) - 6| = |x - 3|$, and $\delta = \varepsilon$ works: $\lim_{x \to 3} f(x) = 6$.

## Try it

1. For $a_n = \tfrac1n$, find an $N$ that works for $\varepsilon = 0.001$.
2. Prove that $\lim_{n \to \infty} \tfrac{1}{n^2} = 0$.
3. Prove that $\lim_{n \to \infty} \tfrac{2n - 1}{n} = 2$.
4. Prove that $\lim_{x \to 2} (5x - 4) = 6$. What is $\delta$ when $\varepsilon = 0.1$?
5. For $\lim_{x \to 3} (2x + 1) = 7$ and $\varepsilon = 0.3$, what is the largest $\delta$ that works?
6. Prove that $\lim_{x \to 1} x^2 = 1$. (Hint: first insist $|x - 1| < 1$.)
7. Let $f(x) = 1$ for $x > 0$ and $f(x) = -1$ for $x < 0$. Show that $\lim_{x \to 0} f(x)$ does not exist.
8. Write in symbols what it means for a sequence to have **no** limit at all (for every $L$, it does not converge to
   $L$).

??? note "Answers"
    1. $\tfrac1n < 0.001$ when $n > 1000$, so $N = 1000$.
    2. Let $\varepsilon > 0$ and $N = \tfrac{1}{\sqrt\varepsilon}$. For $n > N$, $n^2 > N^2 = \tfrac1\varepsilon$, so
       $\left|\tfrac1{n^2} - 0\right| = \tfrac1{n^2} < \varepsilon$. ∎
    3. $\left|\tfrac{2n-1}{n} - 2\right| = \left|\tfrac{-1}{n}\right| = \tfrac1n$. Let $\varepsilon > 0$ and
       $N = \tfrac1\varepsilon$; for $n > N$, $\tfrac1n < \varepsilon$. ∎
    4. $|(5x - 4) - 6| = |5x - 10| = 5|x - 2|$. Let $\delta = \tfrac\varepsilon5$. If $0 < |x - 2| < \delta$ then
       $|(5x - 4) - 6| < 5\delta = \varepsilon$. ∎ For $\varepsilon = 0.1$, $\delta = 0.02$.
    5. We need $2|x - 3| < 0.3$, that is $|x - 3| < 0.15$. So $\delta = 0.15$ is the largest. (Check: at $x = 3.15$,
       $f(x) = 7.3$, exactly at the edge; anything closer is inside.)
    6. $|x^2 - 1| = |x - 1|\,|x + 1|$. If $|x - 1| < 1$ then $0 < x < 2$, so $|x + 1| < 3$. Let
       $\delta = \min\left(1, \tfrac\varepsilon3\right)$. If $0 < |x - 1| < \delta$ then
       $|x^2 - 1| < 3 \cdot \tfrac\varepsilon3 = \varepsilon$. ∎
    7. Suppose the limit were $L$. Take $\varepsilon = 1$. Any $\delta > 0$ allows both $x = \tfrac\delta2$ (where
       $f = 1$) and $x = -\tfrac\delta2$ (where $f = -1$). Both values within 1 of $L$ would give
       $2 = |1 - (-1)| < 1 + 1 = 2$, which is false. So no $L$ works, and the limit does not exist.
    8. For every $L$, there is $\varepsilon > 0$ such that for every $N$ there is $n > N$ with
       $|a_n - L| \ge \varepsilon$. (Such a sequence is said to **diverge**.)

## Common mistake

**Choosing $\varepsilon$ yourself.** In a proof that a limit **is** $L$, you do not get to pick $\varepsilon$; you
must handle every $\varepsilon$ at once, so your $N$ or $\delta$ is a formula in $\varepsilon$. (In a proof that a
limit is **not** $L$, you do get to pick one bad $\varepsilon$.)

**Letting $\delta$ depend on $x$.** $\delta$ may depend on $\varepsilon$ (and on $a$), but it must be chosen
**before** $x$: one window that works for every $x$ in it. Writing "$\delta = \tfrac{\varepsilon}{|x+3|}$" is not
allowed; that is why worked example 5 first trapped $|x + 3|$ below 7.

## Where it leads

- Next: [Convergence tests](02-convergence-tests.md), where the definition decides when an infinite sum has a value.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · Limits in words, and sequences that settle:
  [Level 5](../level-5/index.md).
- Quantifiers like "for every" and "there is", and how to negate them: [Predicate logic](../../logic/level-8/01-predicate-logic.md).
  Limits used to define speed: [Change](../../change/index.md).
- On the U of T shelf: [MAT137 Unit 2, limits and continuity](../../../uoft/MAT137/unit02.md),
  [MAT137 Unit 11, sequences](../../../uoft/MAT137/unit11.md), and the proof-heavy
  [MAT158 Unit 3, limits](../../../uoft/MAT158H1/unit03.md).
